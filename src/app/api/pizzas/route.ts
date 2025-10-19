import { NextResponse } from "next/server";
import { db, pizzas, pizzaSizes } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const allPizzas = await db.query.pizzas.findMany({
      where: eq(pizzas.isActive, true),
      with: {
        sizes: true,
      },
    });

    return NextResponse.json(allPizzas);
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    return NextResponse.json(
      { error: "Failed to fetch pizzas" },
      { status: 500 }
    );
  }
}
