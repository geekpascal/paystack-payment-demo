"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, XCircle, Loader } from "lucide-react"

export default function PaymentSuccess() {
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState<string>("Verifying payment...")
  const searchParams = useSearchParams()
  const reference = searchParams.get("reference")

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await fetch(`/api/verify-payment?reference=${reference}`)
        const data = await response.json()

        if (data.status && data.data.status === "success") {
          setVerificationStatus("success")
          setMessage("Payment successful!")
        } else {
          setVerificationStatus("error")
          setMessage("Payment verification failed. Please contact support.")
        }
      } catch (error) {
        console.error("Error verifying payment:", error)
        setVerificationStatus("error")
        setMessage("An error occurred while verifying the payment.")
      }
    }

    if (reference) {
      verifyPayment()
    }
  }, [reference])

  const statusIcon = {
    loading: <Loader className="h-16 w-16 text-blue-500 animate-spin" />,
    success: <CheckCircle className="h-16 w-16 text-green-500" />,
    error: <XCircle className="h-16 w-16 text-red-500" />,
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">{statusIcon[verificationStatus]}</div>
        <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
        <p className="text-lg text-gray-600">{message}</p>
        {verificationStatus !== "loading" && (
          <a
            href="/"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </a>
        )}
      </div>
    </div>
  )
}

