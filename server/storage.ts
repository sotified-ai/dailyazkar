import { users, type User, type InsertUser, type Blog, type InsertBlog } from "@shared/schema";
import { BLOG_POSTS } from "../client/src/data/blog-data";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Blogs Cache
  getBlogs(): Promise<Blog[]>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogs: Map<number, Blog>;
  currentId: number;
  currentBlogId: number;

  constructor() {
    this.users = new Map();
    this.blogs = new Map();
    this.currentId = 1;
    this.currentBlogId = 1;

    // Seed static blogs immediately on startup
    this.seedStaticBlogs();
  }

  private seedStaticBlogs() {
    BLOG_POSTS.forEach(post => {
      const id = this.currentBlogId++;
      const combinedContent = post.content + (post.contentUrdu ?
        `<div class="mt-8 pt-8 border-t border-emerald-100 dark:border-emerald-800" dir="rtl">
          <div class="font-arabic text-3xl mb-4 leading-relaxed">${post.titleUrdu}</div>
          <div class="font-arabic text-xl leading-loose whitespace-pre-line text-right">${post.contentUrdu}</div>
        </div>` : "");

      this.blogs.set(id, {
        id,
        title: post.title,
        slug: post.slug,
        content: combinedContent,
        imageUrl: post.image || null,
        seoTitle: post.title,
        seoDescription: post.excerpt,
        seoKeywords: post.category,
        publishedAt: new Date(post.date),
        createdAt: new Date(post.date)
      });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = {
      ...insertUser,
      id,
      preferences: insertUser.preferences ?? null,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async getBlogs(): Promise<Blog[]> {
    return Array.from(this.blogs.values()).sort((a, b) => {
      const dbA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dbB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dbB - dbA;
    });
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return Array.from(this.blogs.values()).find((b) => b.slug === slug);
  }

  async createBlog(insertBlog: InsertBlog): Promise<Blog> {
    const id = this.currentBlogId++;
    const blog: Blog = {
      ...insertBlog,
      id,
      publishedAt: new Date(),
      createdAt: new Date(),
      imageUrl: insertBlog.imageUrl || null,
      seoTitle: insertBlog.seoTitle || null,
      seoDescription: insertBlog.seoDescription || null,
      seoKeywords: insertBlog.seoKeywords || null
    };
    this.blogs.set(id, blog);
    return blog;
  }
}

export const storage = new MemStorage();
