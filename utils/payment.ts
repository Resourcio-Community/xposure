import { createOrder } from "@/lib/payment/createOrder";

export async function processPayment(name: string, email: string, amount: number) {
    return new Promise<string | null>(async (resolve, reject) => {
        const orderId = await createOrder(amount, 'INR');
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
            amount: amount * 100,
            currency: 'INR',
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
                    // alert("payment succeed");
                    resolve(data.razorpayPaymentId)
                }
                else {
                    // alert(res.message);
                    reject(null)
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
    })
};