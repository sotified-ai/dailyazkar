import type { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to noindex config file
const NOINDEX_CONFIG_PATH = path.resolve(__dirname, "..", "seo", "noindex-pages.json");

// Cache for noindex pages
let noindexPages: Record<string, boolean> = {};
let lastModified = 0;

/**
 * Load noindex configuration from JSON file
 * Automatically reloads if file has been modified
 */
function loadNoindexConfig(): Record<string, boolean> {
    try {
        if (!fs.existsSync(NOINDEX_CONFIG_PATH)) {
            return {};
        }

        const stats = fs.statSync(NOINDEX_CONFIG_PATH);
        const mtime = stats.mtimeMs;

        // Reload if file has been modified
        if (mtime > lastModified) {
            const content = fs.readFileSync(NOINDEX_CONFIG_PATH, "utf-8");
            noindexPages = JSON.parse(content);
            lastModified = mtime;
            console.log("[SEO] Loaded noindex config:", Object.keys(noindexPages).length, "pages");
        }

        return noindexPages;
    } catch (error) {
        console.error("[SEO] Error loading noindex config:", error);
        return {};
    }
}

/**
 * Middleware to inject X-Robots-Tag: noindex header for configured pages
 * This protects AdSense compliance by preventing thin pages from being indexed
 */
export function noindexMiddleware(req: Request, res: Response, next: NextFunction): void {
    // Skip API routes
    if (req.path.startsWith("/api")) {
        return next();
    }

    // Load/refresh config
    const config = loadNoindexConfig();

    // Check if current path should be noindexed
    if (config[req.path]) {
        res.setHeader("X-Robots-Tag", "noindex, nofollow");
        console.log(`[SEO] Applied noindex to: ${req.path}`);
    }

    next();
}
