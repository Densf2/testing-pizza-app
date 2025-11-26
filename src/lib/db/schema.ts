import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  decimal,
  timestamp,
  boolean,
  pgEnum,
  unique,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "confirmed",
  "preparing",
  "out_for_delivery",
  "delivered",
  "cancelled",
]);

export const pizzaSizeEnum = pgEnum("pizza_size", [
  "small",
  "medium",
  "large",
  "xlarge",
]);

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Addresses table
export const addresses = pgTable("addresses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  street: varchar("street", { length: 255 }).notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  zipCode: varchar("zip_code", { length: 10 }).notNull(),
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Pizzas table
export const pizzas = pgTable("pizzas", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  basePrice: decimal("base_price", { precision: 10, scale: 2 }).notNull(),
  category: varchar("category", { length: 50 }),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Pizza sizes pricing
export const pizzaSizes = pgTable(
  "pizza_sizes",
  {
    id: serial("id").primaryKey(),
    pizzaId: integer("pizza_id")
      .references(() => pizzas.id)
      .notNull(),
    size: pizzaSizeEnum("size").notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  },
  (table) => ({
    uniquePizzaSize: unique().on(table.pizzaId, table.size),
  })
);

// Toppings table
export const toppings = pgTable("toppings", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Orders table
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  addressId: integer("address_id").references(() => addresses.id),
  status: orderStatusEnum("status").default("pending").notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  deliveryFee: decimal("delivery_fee", { precision: 10, scale: 2 }).default(
    "0"
  ),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Order items table
export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id")
    .references(() => orders.id)
    .notNull(),
  pizzaId: integer("pizza_id")
    .references(() => pizzas.id)
    .notNull(),
  size: pizzaSizeEnum("size").notNull(),
  quantity: integer("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

// Order item toppings (many-to-many)
export const orderItemToppings = pgTable("order_item_toppings", {
  id: serial("id").primaryKey(),
  orderItemId: integer("order_item_id")
    .references(() => orderItems.id)
    .notNull(),
  toppingId: integer("topping_id")
    .references(() => toppings.id)
    .notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
  addresses: many(addresses),
}));

export const addressesRelations = relations(addresses, ({ one }) => ({
  user: one(users, {
    fields: [addresses.userId],
    references: [users.id],
  }),
}));

export const pizzasRelations = relations(pizzas, ({ many }) => ({
  sizes: many(pizzaSizes),
  orderItems: many(orderItems),
}));

export const pizzaSizesRelations = relations(pizzaSizes, ({ one }) => ({
  pizza: one(pizzas, {
    fields: [pizzaSizes.pizzaId],
    references: [pizzas.id],
  }),
}));

export const toppingsRelations = relations(toppings, ({ many }) => ({
  orderItemToppings: many(orderItemToppings),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  address: one(addresses, {
    fields: [orders.addressId],
    references: [addresses.id],
  }),
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one, many }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  pizza: one(pizzas, {
    fields: [orderItems.pizzaId],
    references: [pizzas.id],
  }),
  toppings: many(orderItemToppings),
}));

export const orderItemToppingsRelations = relations(
  orderItemToppings,
  ({ one }) => ({
    orderItem: one(orderItems, {
      fields: [orderItemToppings.orderItemId],
      references: [orderItems.id],
    }),
    topping: one(toppings, {
      fields: [orderItemToppings.toppingId],
      references: [toppings.id],
    }),
  })
);
