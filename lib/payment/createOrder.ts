"use server";
import Razorpay from "razorpay";
import crypto from "node:crypto";

export async function createOrder(
  amount: number,
  currency: string,
) {
  const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID as string,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET as string,
  })

  try {
    const data = await instance.orders.create({
      amount: amount * 100,
      currency,
      receipt: crypto.randomBytes(10).toString('hex')
    })
    return data.id
  }
  catch (err) {
    throw new Error('Order creation Failed')
  }
}
