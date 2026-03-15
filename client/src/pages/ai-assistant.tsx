import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { SEOHead } from "@/components/seo-head";

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

export default function AIAssistant() {
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
    const res = await apiRequest("POST", "/api/conversations", {
      title: `Chat ${new Date().toLocaleDateString()}`,
    });
    const newConversation = await res.json();
    setCurrentConversationId(newConversation.id);
    setMessages([]);
    queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
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
    <>
      <SEOHead
        title="AI Assistant | Daily Azkar"
        description="Chat with our AI assistant about Islamic daily remembrance (Azkar) and get personalized spiritual guidance."
        path="/ai-assistant"
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glassmorphism rounded-xl p-4 sticky top-24">
                <Button
                  onClick={createConversation}
                  className="w-full mb-4 bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white font-semibold rounded-lg"
                >
                  <i className="fas fa-plus mr-2"></i> New Chat
                </Button>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">
                    Conversations
                  </h3>
                  {conversations.length === 0 ? (
                    <p className="text-xs text-gray-500 px-2">No conversations yet</p>
                  ) : (
                    conversations.map((conv: Conversation) => (
                      <button
                        key={conv.id}
                        onClick={() => setCurrentConversationId(conv.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          currentConversationId === conv.id
                            ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {conv.title.length > 20 ? conv.title.slice(0, 20) + "..." : conv.title}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <div className="glassmorphism rounded-xl overflow-hidden flex flex-col h-[600px]">
                {!currentConversationId ? (
                  <div className="flex-1 flex items-center justify-center text-center p-8">
                    <div>
                      <i className="fas fa-comments text-4xl text-emerald-500 mb-4"></i>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Ask About Daily Azkar
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Start a new conversation to chat with our AI assistant about Islamic remembrance
                      </p>
                      <Button
                        onClick={createConversation}
                        className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white font-semibold"
                      >
                        <i className="fas fa-plus mr-2"></i> Start Conversation
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {messages.length === 0 ? (
                        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                          <p>Start the conversation by asking a question about Daily Azkar...</p>
                        </div>
                      ) : (
                        messages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                msg.role === "user"
                                  ? "bg-emerald-500 text-white rounded-br-none"
                                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
                              }`}
                            >
                              <p className="text-sm">{msg.content}</p>
                            </div>
                          </div>
                        ))
                      )}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                      <div className="flex gap-2">
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSend()}
                          placeholder="Ask about Azkar, Quran, or Islamic practices..."
                          className="flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                          disabled={isLoading || isPending}
                        />
                        <Button
                          onClick={handleSend}
                          disabled={isLoading || isPending || !input.trim()}
                          className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white"
                        >
                          <i className="fas fa-paper-plane"></i>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
