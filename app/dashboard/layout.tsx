"use client";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import NavigationProvider from "@/lib/NavigationProvider";
import { Authenticated } from "convex/react";
import React, { useState } from "react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NavigationProvider>
			<div className="flex h-screen">
				<Authenticated>
					<Sidebar />
				</Authenticated>

				<div className="flex-1 flex flex-col min-w-0">
					<Navbar />
					<main className="flex-1 overflow-y-auto">{children}</main>
				</div>
			</div>
		</NavigationProvider>
	);
}
