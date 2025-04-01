import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NavLink({
	href,
	children,
	className,
	onClick,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<Link
			className={cn(
				"transition-colors text-md duration-200 text-gray-800 dark:text-gray-200 md:text-lg hover:text-gray-500 dark:hover:text-gray-400",
				className
			)}
			href={href}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
