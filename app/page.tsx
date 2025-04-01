import Hero from "@/components/landing-page/Hero";
import LandingHeader from "@/components/landing-page/LandingHeader";

export default function LandingPage() {
	return (
		<>
			{/* Grid background div */}
			<div className="fixed inset-0 -z-10 h-full w-full bg-white">
				<div className="absolute inset-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_0%,#000_80%)]" />
			</div>

			{/* Dark mode grid (hidden by default) */}
			<div className="fixed inset-0 -z-10 h-full w-full dark:block hidden bg-zinc-900">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff24_1px,transparent_1px),linear-gradient(to_bottom,#ffffff24_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_0%,#000_80%)]" />
			</div>
			<div className="flex flex-col min-h-screen">
				<LandingHeader />
				<div className="flex flex-1 justify-center items-center ">
					<Hero />
				</div>
			</div>
			{/* <div className="min-h-screen"></div> */}
		</>
	);
}
