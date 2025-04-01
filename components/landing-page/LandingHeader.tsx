import React from "react";
import NavLink from "./NavLink";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import DarkModeToggle from "../shared/DarkModeToggle";
import { Button } from "../ui/button";

export default function LandingHeader() {
	return (
		<div className="w-full">
			<nav className="container flex items-center justify-between py-4 px-6 md:px-12 mx-auto max-w-7xl">
				<div className="flex md:flex-1">
					<NavLink
						className="flex items-center justify-center gap-2 lg:gap-2 shrink-0 "
						href="/"
					>
						<h1 className=" text-xl md:text-2xl font-semibold ">
							Logo
						</h1>
					</NavLink>
				</div>
				<div className="flex sm:justify-end sm:flex-1 ">
					<div className="flex gap-4 md:gap-6  justify-center items-center">
						<SignedIn>
							<NavLink href="/dashboard">Dashboard</NavLink>
						</SignedIn>
						<DarkModeToggle />
						<SignedIn>
							<UserButton />
						</SignedIn>{" "}
						<SignedOut>
							<SignInButton
								mode="modal"
								fallbackRedirectUrl={"/dashboard"}
								forceRedirectUrl={"/dashboard"}
							>
								<Button
									className="group inline-flex rounded-3xl w-20 lg:w-28 cursor-pointer justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700
						dark:from-gray-200 dark:to-gray-100 dark:hover:from-gray-300 dark:hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105  leading-relaxed"
								>
									Sign In
								</Button>
							</SignInButton>
						</SignedOut>
					</div>
				</div>
			</nav>
		</div>
	);
}
