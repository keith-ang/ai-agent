import { Menu } from "lucide-react";
import React, { use } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "../shared/DarkModeToggle";
import { NavigationContext } from "@/lib/NavigationProvider";

export default function Navbar() {
	const { setIsMobileMenuOpen } = use(NavigationContext);

	return (
		<div className="w-full bg-white dark:bg-zinc-900 shadow-md shadow-gray-40 dark:shadow-gray-800 dark:shadow-2xs ">
			<nav className=" flex items-center justify-between p-4 mx-auto">
				<div className="flex gap-3 justify-center items-center">
					<Button
						className="md:hidden w-8 h-8 bg-transparent cursor-pointer border border-gray-300"
						variant="ghost"
						size="icon"
						onClick={() => setIsMobileMenuOpen(true)}
					>
						<Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
					</Button>
					<h1 className="text-lg md:text-xl tracking-tight font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-50 dark:to-gray-300 bg-clip-text text-transparent">
						Chat with an AI Agent
					</h1>
				</div>
				<div className="flex sm:justify-end sm:flex-1 ">
					<div className="flex gap-4 md:gap-6 justify-center items-center">
						<DarkModeToggle />
						<SignedIn>
							<UserButton
								appearance={{
									elements: {
										avatarBox:
											"h-10 w-10 ring-2 ring-gray-200/50 ring-offset-2 rounded-full transition-shadow hover:ring-gray-300/50",
									},
								}}
							/>
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
