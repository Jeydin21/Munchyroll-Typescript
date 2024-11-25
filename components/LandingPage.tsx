import Link from "next/link";
import Hero from "@/components/interface/Hero";
import Search from "@/components/interface/Search";

function LandingPage() {
	return (
		<div className={`text-primary dark:text-secondary`}>
			<Hero />
			<Search />
		</div>
	);
}

export default LandingPage;