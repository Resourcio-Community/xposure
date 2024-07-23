import Preloader from "@/components/Global/Preloader";
import dynamic from "next/dynamic";
import Script from "next/script";

const Submission = dynamic(() => import("@/components/Submission"), {
	loading: () => <Preloader width="5rem" height="5rem" color="#FFE39C" />
})

export default function SubmissionPage() {
	return (
		<>
			<Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
			<Submission />
		</>
	)
};
