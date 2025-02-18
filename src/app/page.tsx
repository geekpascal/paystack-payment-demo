import PaymentForm from "@/components/PaymentForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Paystack Payment Demo</h1>
        </div>
        <div className="p-6">
          <PaymentForm />
        </div>
      </div>
    </main>
  )
}

