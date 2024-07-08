import dynamic from "next/dynamic";

const Submission = dynamic(() => import("@/components/Submission"))

export default function SubmissionPage() {
	return <Submission />
};
