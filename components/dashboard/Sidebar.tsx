import { NavigationContext } from "@/lib/NavigationProvider";
import { cn } from "@/lib/utils";
import React, { use } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import ChatRow from "./ChatRow";

export default function Sidebar() {
	const router = useRouter();
	const { closeMobileMenu, isMobileMenuOpen, setIsMobileMenuOpen } =
		use(NavigationContext);

	const chats = useQuery(api.chats.listChats);
	const createChat = useMutation(api.chats.createChat);
	const deleteChat = useMutation(api.chats.deleteChat);

	const handleNewChat = async () => {
		const chatId = await createChat({ title: "New Chat" });
		router.push(`/dashboard/chat/${chatId}`);
		closeMobileMenu();
	};

	const handleDeleteChat = async (id: Id<"chats">) => {
		await deleteChat({ id });

		if (window.location.pathname.includes(id)) {
			router.push("/dashboard");
		}
	};

	return (
		<>
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/20 z-40 md:hidden"
					onClick={closeMobileMenu}
				></div>
			)}

			<div
				className={cn(
					"fixed md:inset-y-0 top-0 bottom-0 left-0 z-50 w-72  bg-gray-50/80 backdrop-blur-2xl border-r border-gray-200/50 dark:bg-zinc-900 dark:border-gray-700 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:top-0 flex flex-col",
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<div className="p-4 border-b border-gray-300 dark:border-gray-600">
					<Button
						onClick={handleNewChat}
						className="w-full border bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-300 border-gray-200/50 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
					>
						<PlusIcon className="mr-2 h-4 w-4" /> New Chat
					</Button>
				</div>

				<div className="flex-1 overflow-y-auto space-y-2.5 p-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
					{chats?.map((chat) => (
						<ChatRow
							key={chat._id}
							chat={chat}
							onDelete={handleDeleteChat}
						/>
					))}
				</div>
			</div>
		</>
	);
}
