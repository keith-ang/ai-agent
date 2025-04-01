"use client";

import React, { createContext, useState } from "react";

interface NavigationContextType {
	isMobileMenuOpen: boolean;
	setIsMobileMenuOpen: (open: boolean) => void;
	closeMobileMenu: () => void;
}

export const NavigationContext = createContext<NavigationContextType>({
	isMobileMenuOpen: false,
	setIsMobileMenuOpen: () => {},
	closeMobileMenu: () => {},
});

export default function NavigationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<NavigationContext
			value={{ isMobileMenuOpen, setIsMobileMenuOpen, closeMobileMenu }}
		>
			{children}
		</NavigationContext>
	);
}
