import { NextResponse } from "next/server"
import axios from "axios"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const reference = searchParams.get("reference")

  if (!reference) {
    return NextResponse.json({ error: "Reference is required" }, { status: 400 })
  }

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    })

    return NextResponse.json(response.data)
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json({ error: "Payment verification failed" }, { status: 500 })
  }
}

