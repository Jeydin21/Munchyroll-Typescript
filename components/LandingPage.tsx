import Link from "next/link";
import Hero from "@/components/interface/Hero";

function LandingPage() {
	return (
		<div className={`text-primary dark:text-secondary`}>
			<Hero />
		</div>
	);
}

export default LandingPage;