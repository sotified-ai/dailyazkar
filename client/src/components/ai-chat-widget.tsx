import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
    id?: number;
    role: "user" | "assistant";
    content: string;
    conversationId?: number;
    createdAt?: string;
}

interface Conversation {
    id: number;
    title: string;
    createdAt: string;
}

export function AIChatWidget() {
    const [currentConversationId, setCurrentConversationId] = useState<number | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { data: conversations = [] } = useQuery({
        queryKey: ["/api/conversations"],
        queryFn: async () => {
            const res = await fetch("/api/conversations");
            return res.json();
        },
    });

    useEffect(() => {
        // Automatically create conversation if none exist or none selected
        if (conversations.length > 0 && !currentConversationId) {
            setCurrentConversationId(conversations[0].id);
        } else if (conversations.length === 0 && !currentConversationId && !isLoading) {
            createConversation();
        }
    }, [conversations, currentConversationId]);

    useEffect(() => {
        if (!currentConversationId) return;

        const fetchMessages = async () => {
            const res = await fetch(`/api/conversations/${currentConversationId}`);
            const data = await res.json();
            setMessages(data.messages || []);
        };

        fetchMessages();
    }, [currentConversationId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const createConversation = async () => {
        try {
            const res = await apiRequest("POST", "/api/conversations", {
                title: `Chat ${new Date().toLocaleDateString()}`,
            });
            const newConversation = await res.json();
            setCurrentConversationId(newConversation.id);
            setMessages([]);
            queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
        } catch (error) {
            console.error("Failed to create conversation:", error);
        }
    };

    const { mutate: sendMessage, isPending } = useMutation({
        mutationFn: async (content: string) => {
            if (!currentConversationId) return;

            setIsLoading(true);
            setMessages((prev) => [...prev, { role: "user", content }]);
            setInput("");

            try {
                const response = await fetch(`/api/conversations/${currentConversationId}/messages`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content }),
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.error || "Failed to get response from AI");
                }

                if (!response.body) throw new Error("No response body");

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let assistantMessage = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split("\n");

                    for (const line of lines) {
                        if (!line.startsWith("data: ")) continue;

                        try {
                            const event = JSON.parse(line.slice(6));
                            if (event.content) {
                                assistantMessage += event.content;
                                setMessages((prev) => {
                                    const updated = [...prev];
                                    const lastMsg = updated[updated.length - 1];
                                    if (lastMsg?.role === "assistant") {
                                        lastMsg.content = assistantMessage;
                                    } else {
                                        updated.push({ role: "assistant", content: assistantMessage });
                                    }
                                    return updated;
                                });
                            }
                        } catch (e) {
                            // Ignore parse errors
                        }
                    }
                }
            } catch (error: any) {
                console.error("AI Chat Error:", error);
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: `⚠️ ${error.message}`
                    }
                ]);
            } finally {
                setIsLoading(false);
            }
        },
    });

    const handleSend = () => {
        if (!input.trim() || !currentConversationId) return;
        sendMessage(input);
    };

    return (
        <div className="flex flex-col h-full bg-background border-l border-border/50">
            <div className="p-4 border-b border-border/50 bg-card flex items-center justify-between">
                <div>
                    <h2 className="font-bold text-lg flex items-center gap-2">
                        <i className="fas fa-robot text-emerald-500"></i>
                        Azkar Assistant
                    </h2>
                    <p className="text-xs text-muted-foreground">Ask anything about Azkar or Islam</p>
                </div>
                <Button variant="ghost" size="icon" onClick={createConversation} title="New Chat">
                    <i className="fas fa-plus"></i>
                </Button>
            </div>

            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4 pb-4">
                    {messages.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <i className="fas fa-sparkles text-emerald-600"></i>
                            </div>
                            <p className="text-sm text-muted-foreground">As-salamu alaykum! How can I help you today with your dhikr and Islamic practices?</p>
                        </div>
                    ) : (
                        messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex",
                                    msg.role === "user" ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[85%] px-4 py-2 rounded-2xl text-sm shadow-sm",
                                        msg.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-br-none"
                                            : "bg-muted text-foreground rounded-bl-none border border-border/40"
                                    )}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-none border border-border/40">
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                    <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </ScrollArea>

            <div className="p-4 border-t border-border/50 bg-card">
                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 h-10 rounded-full bg-background border-border/60 focus-visible:ring-emerald-500"
                        disabled={isLoading || isPending}
                    />
                    <Button
                        size="icon"
                        onClick={handleSend}
                        disabled={isLoading || isPending || !input.trim()}
                        className="h-10 w-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shrink-0 shadow-lg shadow-emerald-500/20"
                    >
                        <i className="fas fa-paper-plane text-xs"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
}
