import { eq } from "drizzle-orm";
import { db } from "../database/index.js";
import { accounts, users } from "../database/schema.js";

// Get all accounts with their associated categories
export const getAllAccounts = async (req, res) => {
  try {
    const allAccounts = await db.query.accounts.findMany({
      with: {
        category: true, // Include related categories
      },
      where: eq(accounts.userId, req.user.id), //
    });

    res.json(allAccounts);
  } catch (error) {
    console.error("Error retrieving accounts:", error); // Log the error for debugging
    res.status(500).json({ error: "Failed to retrieve accounts." });
  }
};

// Create a new account
export const createAccount = async (req, res) => {
  const { amount, categoryId, userId, payee, note, date, time, type } =
    req.body;

  try {
    const [newAccount] = await db
      .insert(accounts)
      .values({
        amount,
        categoryId,
        userId: req.user.id,
        payee,
        note,
        date,
        time,
        type,
      })
      .returning(); // Ensure to get the newly created account

    res.status(201).json(newAccount);
  } catch (error) {
    console.error("Error creating account:", error); // Log the error for debugging
    res.status(500).json({ error: "Failed to create account." });
  }
};
