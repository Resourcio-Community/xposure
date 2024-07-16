"use server";
import Razorpay from "razorpay";
export async function createOrder(
  amount: number,
  currency: string,
  receipt: string
) {
  const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID as string,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET as string,
  })
  const data = await instance.orders.create({amount:amount,currency:currency,receipt:receipt})
  // console.log(data.id);
  return data.id
}
