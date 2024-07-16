"use client"
import Razorpay from "razorpay";
import axios from "axios";
export async function createOrder(
  custName: string,
  custEmail: string,
  amount: number,
  receipt: string,
  orderId: string
) {
  const options = {
    key: process.env.NEXT_PUBLIC_KEY_ID as string, // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: "INR",
    name: "Soumya Corp.",
    description: "Test Transaction",
    order_id: orderId,
    handler: async function (response: any) {
      const data = {
        orderCreationId: orderId,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const res = await result.json();
      if (res.isOk) alert("payment succeed");
      else {
        alert(res.message);
      }
    },
    prefill: {
      name: custName,
      email: custEmail,
    },
    notes: {
      address: "Example Corporate Office",
    },
    theme: {
      color: "#61dafb",
    },
    
  };
//   const paymentObject = new window.Razorpay(options);
//    paymentObject.on('payment.failed', function (response: any) {
//     alert(response.error.description);
//    });
//    paymentObject.open();
}

