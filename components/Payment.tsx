"use client"
import React, { useState } from 'react'
import { createOrder } from '@/lib/payment/createOrder'
import Script from 'next/script';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
// import { calculatePrice } from '@/utils/calculatePrice';


export default function Payment() {
  const { user } = useAuth()
  const name = user?.displayName
  const email = user?.email;
  const [currency, setCurrency] = useState('INR');
  const [loading, setLoading] = useState(false);

  const processPayment = async () => {
    setLoading(true);
    try {
      const orderId = await createOrder(2500, "INR", "receipt#3");
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        amount: 2500,
        currency: currency,
        name: name,
        description: 'This is submission/maintainance fee for the event.',
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
          const res = await result.json();
          if (res.isOk) {
            alert("payment succeed");
            setLoading(false);
          }
          else {
            alert(res.message);
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: '#3399cc',
        },
      };
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="min-h-[94vh] flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-36 text-white">

        <button onClick={processPayment} className='bg-text_yellow text-black w-fit px-16 py-2'>
          {
            loading ? <Image className="w-10 h-10 animate-spin" src="https://www.svgrepo.com/show/448500/loading.svg" alt="Loading icon"></Image> : "Pay"
          }
        </button>
        {/* <button onClick={() => console.log(calculatePrice(1, 2))} className='bg-text_yellow text-black w-fit px-16 py-2'>Price?</button> */}
      </section>
    </>
  );
}
