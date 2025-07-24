import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const azkarCategories = pgTable("azkar_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nameArabic: text("name_arabic").notNull(),
  description: text("description"),
  icon: text("icon"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const azkarItems = pgTable("azkar_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => azkarCategories.id),
  title: text("title").notNull(),
  titleArabic: text("title_arabic"),
  content: text("content").notNull(),
  translation: text("translation"),
  reference: text("reference"),
  repetitions: integer("repetitions").default(1),
  order: integer("order").default(0),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const quranSurahs = pgTable("quran_surahs", {
  id: serial("id").primaryKey(),
  number: integer("number").notNull().unique(),
  name: text("name").notNull(),
  nameArabic: text("name_arabic").notNull(),
  verses: integer("verses").notNull(),
  type: text("type").notNull(), // "meccan" or "medinan"
  createdAt: timestamp("created_at").defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  preferences: text("preferences"), // JSON string for user preferences
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAzkarCategorySchema = createInsertSchema(azkarCategories).omit({
  id: true,
  createdAt: true,
});

export const insertAzkarItemSchema = createInsertSchema(azkarItems).omit({
  id: true,
  createdAt: true,
});

export const insertQuranSurahSchema = createInsertSchema(quranSurahs).omit({
  id: true,
  createdAt: true,
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export type AzkarCategory = typeof azkarCategories.$inferSelect;
export type AzkarItem = typeof azkarItems.$inferSelect;
export type QuranSurah = typeof quranSurahs.$inferSelect;
export type User = typeof users.$inferSelect;
export type InsertAzkarCategory = z.infer<typeof insertAzkarCategorySchema>;
export type InsertAzkarItem = z.infer<typeof insertAzkarItemSchema>;
export type InsertQuranSurah = z.infer<typeof insertQuranSurahSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
