import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { features } from "@/constants";

export default function Hero() {
	return (
		<section
			id="#hero"
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
		>
			<div className="flex flex-col items-center justify-center px-2 space-y-10">
				<div className="space-y-6 pb-4">
					<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-snug bg-gradient-to-r from-gray-950 via-slate-900 to-stone-800 dark:from-gray-50 dark:via-gray-200 dark:to-slate-200 bg-clip-text text-transparent">
						AI Agent Assistant
					</h1>
					<p className="max-w-5xl text-gray-600 dark:text-gray-300 text-lg md:text-xl/relaxed lg:text-2xl/relaxed font-semibold">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						In at diam eget lacus porttitor malesuada.
					</p>
					<span className="text-gray-500 dark:text-gray-400 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ornare.
					</span>
				</div>

				<SignedIn>
					<Link href="/dashboard">
						<Button
							className="group inline-flex rounded-3xl h-10 md:h-12 w-32  md:w-40 cursor-pointer justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700
						dark:from-gray-200 dark:to-gray-100 dark:hover:from-gray-300 dark:hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-md md:text-lg leading-relaxed"
						>
							Get Started
							<ArrowRight className="h-5 w-5 md:h-7 md:w-7" />
						</Button>
					</Link>
				</SignedIn>

				<SignedOut>
					<SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
						<Button
							className="group inline-flex rounded-3xl h-10 md:h-12 w-32  md:w-40 cursor-pointer justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700
						dark:from-gray-200 dark:to-gray-100 dark:hover:from-gray-300 dark:hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-md md:text-lg leading-relaxed"
						>
							Sign Up
							<ArrowRight className="h-5 w-5 md:h-7 md:w-7" />
						</Button>
					</SignInButton>
				</SignedOut>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-8 max-w-5xl mx-auto">
					{features.map((feature) => (
						<div key={feature.title} className="text-center">
							<div className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-200">
								{feature.title}
							</div>
							<div className="text-md text-gray-600 dark:text-gray-500 mt-2">
								{feature.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
