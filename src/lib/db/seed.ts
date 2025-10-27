import { db } from "./index";
import { pizzas, pizzaSizes, toppings, users, addresses } from "./schema";

async function seed() {
  console.log("Seeding database");

  try {
    console.log("Adding pizzas data"); // Seed Pizzas
    const [margherita, pepperoni, veggie, hawaiian, bbqChicken] = await db
      .insert(pizzas)
      .values([
        {
          name: "Margherita Classic",
          description: "Fresh tomatoes, mozzarella, and basil",
          imageUrl:
            "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
          basePrice: "299",
          category: "Classic",
          isActive: true,
        },
        {
          name: "Pepperoni Supreme",
          description: "Loaded with pepperoni and extra cheese",
          imageUrl:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e",
          basePrice: "449",
          category: "Meat",
          isActive: true,
        },
        {
          name: "Veggie Delight",
          description: "Bell peppers, onions, mushrooms, and olives",
          imageUrl:
            "https://images.unsplash.com/photo-1571066811602-716837d681de",
          basePrice: "399",
          category: "Vegetarian",
          isActive: true,
        },
        {
          name: "Hawaiian Paradise",
          description: "Ham, pineapple, and mozzarella",
          imageUrl:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
          basePrice: "429",
          category: "Specialty",
          isActive: true,
        },
        {
          name: "BBQ Chicken",
          description: "Grilled chicken, BBQ sauce, onions, and cilantro",
          imageUrl:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          basePrice: "479",
          category: "Specialty",
          isActive: true,
        },
      ])
      .returning();

    console.log("Adding pizza sizes"); // Seed Pizza Sizes
    const allPizzas = [margherita, pepperoni, veggie, hawaiian, bbqChicken];
    for (const pizza of allPizzas) {
      await db.insert(pizzaSizes).values([
        { pizzaId: pizza.id, size: "small", price: pizza.basePrice },
        {
          pizzaId: pizza.id,
          size: "medium",
          price: String(Number(pizza.basePrice) * 1.3),
        },
        {
          pizzaId: pizza.id,
          size: "large",
          price: String(Number(pizza.basePrice) * 1.6),
        },
        {
          pizzaId: pizza.id,
          size: "xlarge",
          price: String(Number(pizza.basePrice) * 2),
        },
      ]);
    }

    console.log("Adding toppings"); // Seed Toppings
    await db.insert(toppings).values([
      { name: "Extra Cheese", price: "30", isActive: true },
      { name: "Mushrooms", price: "25", isActive: true },
      { name: "Pepperoni", price: "40", isActive: true },
      { name: "Olives", price: "25", isActive: true },
      { name: "Bell Peppers", price: "25", isActive: true },
      { name: "Onions", price: "20", isActive: true },
      { name: "Tomatoes", price: "20", isActive: true },
      { name: "Bacon", price: "45", isActive: true },
      { name: "Chicken", price: "50", isActive: true },
      { name: "Pineapple", price: "30", isActive: true },
    ]);

    console.log("Adding test user"); // Seed Test User
    const [testUser] = await db
      .insert(users)
      .values({
        email: "test@pizza.com",
        name: "Test User",
        phone: "+380123456789",
        password: "hashed_password_here", // In production, use bcrypt
      })
      .returning();

    console.log("Adding test address"); // Seed Test Address
    await db.insert(addresses).values({
      userId: testUser.id,
      street: "Khreshchatyk Street, 1",
      city: "Kyiv",
      zipCode: "01001",
      isDefault: true,
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

seed()
  .then(() => {
    console.log("Seed completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  });
