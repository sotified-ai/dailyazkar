import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";
import { registerChatRoutes } from "./replit_integrations/chat";

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), "uploads", "blogs");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for disk storage
const upload = multer({
  storage: multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  }),
});

// Simple Authorization Middleware
const adminAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Register AI Chat routes
  registerChatRoutes(app);
  // Serve uploaded files statically
  app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

  // Admin: Create Blog Post with Image Upload and Auto-SEO
  app.post("/api/admin/blogs", adminAuth, upload.single("image"), async (req, res) => {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required." });
      }

      const imageUrl = req.file ? `/uploads/blogs/${req.file.filename}` : null;

      // Auto-SEO Generation
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      
      // Strip HTML tags for the description and limit to 150 chars
      const plainTextContent = content.replace(/<[^>]*>?/gm, "");
      const seoDescription = plainTextContent.length > 150 
        ? plainTextContent.substring(0, 150) + "..." 
        : plainTextContent;

      // Extract SEO Keywords from Title
      const seoKeywords = title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .split(" ")
        .filter((w: string) => w.length > 3)
        .join(", ");

      const blog = await storage.createBlog({
        title,
        content,
        slug,
        imageUrl: imageUrl || undefined,
        seoTitle: title, // Exact match of heading
        seoDescription,
        seoKeywords,
      });

      res.status(201).json(blog);
    } catch (error) {
      console.error("Error creating blog:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Public: Get all blogs
  app.get("/api/blogs", async (req, res) => {
    const blogs = await storage.getBlogs();
    res.json(blogs);
  });

  // Public: Get single blog by slug
  app.get("/api/blogs/:slug", async (req, res) => {
    const blog = await storage.getBlogBySlug(req.params.slug);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  });

  const httpServer = createServer(app);
  return httpServer;
}
