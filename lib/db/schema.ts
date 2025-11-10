import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Zod schemas
export const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email.email("Invalid email address"),
  name: (schema) => schema.name.min(2, "Name must be at least 2 characters"),
});

export const selectUserSchema = createSelectSchema(users);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
