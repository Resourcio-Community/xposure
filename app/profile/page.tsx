import Preloader from "@/components/Global/Preloader";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("@/components/Profile"), {
  loading: () => <Preloader width="5rem" height="5rem" color="#FFE39C" />
});

export default function ProfilePage() {
  return <Profile />
}
