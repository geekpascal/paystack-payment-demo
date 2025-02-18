# Next.js Paystack Payment Integration

This project demonstrates how to integrate Paystack payment gateway into a Next.js application using TypeScript. It provides a simple and elegant user interface for processing payments.

## Features

- Next.js 13+ with App Router
- TypeScript for type safety
- Paystack payment gateway integration
- Responsive design using Tailwind CSS
- Form validation and error handling
- Payment status verification

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 14.x or later
- npm or yarn
- A Paystack account with API keys

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/geekpascal/paystack-payment-demo.git
   cd paystack-payment-demo
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Create a \`.env.local\` file in the root directory and add your Paystack secret key:

   \`\`\`
   PAYSTACK_SECRET_KEY=your_paystack_secret_key_here
   \`\`\`

   Replace \`your_paystack_secret_key_here\` with your actual Paystack secret key.

## Usage

To run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- \`app/\`: Contains the main application pages and API routes
- \`components/\`: Reusable React components
- \`public/\`: Static assets
- \`styles/\`: Global styles and Tailwind CSS configuration

Key files:

- \`app/page.tsx\`: Main page component
- \`components/PaymentForm.tsx\`: Payment form component
- \`app/api/initiate-payment/route.ts\`: API route for initiating Paystack payment
- \`app/api/verify-payment/route.ts\`: API route for verifying Paystack payment
- \`app/payment/success/page.tsx\`: Payment success page

