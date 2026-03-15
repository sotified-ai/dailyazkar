export interface IChatStorage {
  getConversation(id: number): Promise<any | undefined>;
  getAllConversations(): Promise<any[]>;
  createConversation(title: string): Promise<any>;
  deleteConversation(id: number): Promise<void>;
  getMessagesByConversation(conversationId: number): Promise<any[]>;
  createMessage(conversationId: number, role: string, content: string): Promise<any>;
}

export class MemChatStorage implements IChatStorage {
  private conversations: Map<number, any>;
  private messages: Map<number, any[]>;
  private currentConversationId: number = 1;
  private currentMessageId: number = 1;

  constructor() {
    this.conversations = new Map();
    this.messages = new Map();
  }

  async getConversation(id: number) {
    return this.conversations.get(id);
  }

  async getAllConversations() {
    return Array.from(this.conversations.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createConversation(title: string) {
    const id = this.currentConversationId++;
    const conversation = {
      id,
      title,
      createdAt: new Date().toISOString(),
    };
    this.conversations.set(id, conversation);
    this.messages.set(id, []);
    return conversation;
  }

  async deleteConversation(id: number) {
    this.conversations.delete(id);
    this.messages.delete(id);
  }

  async getMessagesByConversation(conversationId: number) {
    return this.messages.get(conversationId) || [];
  }

  async createMessage(conversationId: number, role: string, content: string) {
    const id = this.currentMessageId++;
    const message = {
      id,
      conversationId,
      role,
      content,
      createdAt: new Date().toISOString(),
    };
    const conversationMessages = this.messages.get(conversationId) || [];
    conversationMessages.push(message);
    this.messages.set(conversationId, conversationMessages);
    return message;
  }
}

export const db = new MemChatStorage();
