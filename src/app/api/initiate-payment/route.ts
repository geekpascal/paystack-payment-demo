import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  try {
    const { email, amount } = await request.json();

    // // Convert amount from Naira to Kobo
    // const amountInKobo = amount * 100;


    // Ensure the secret key is defined
    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!paystackSecretKey) {
      throw new Error("Paystack secret key is not defined in environment variables.");
    }

    // Initialize the transaction
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        // amount: amountInKobo,
        amount // i was testing and found out that paystack doesnt really convert from naira to kobo so i had to comment the previous code
      },
      {
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data.data);
  } catch (error: any) {
    console.error("Error initiating payment:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Payment initiation failed", details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
