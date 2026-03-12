import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
    try {
        const { amount, currency = "INR" } = await req.json();

        if (!amount) {
            return NextResponse.json({ error: "Amount is required" }, { status: 400 });
        }

        // Initialize Razorpay with test keys (in a real app, use env vars)
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_YourTestKeyHere",
            key_secret: process.env.RAZORPAY_KEY_SECRET || "YourTestSecretHere",
        });

        const options = {
            amount: Math.round(amount * 100), // amount in the smallest currency unit (paise)
            currency,
            receipt: `receipt_order_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);
        return NextResponse.json(order);
    } catch (error) {
        console.error("Razorpay error:", error);
        return NextResponse.json(
            { error: "Something went wrong while creating the order" },
            { status: 500 }
        );
    }
}
