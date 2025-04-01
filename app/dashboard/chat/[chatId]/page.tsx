import ChatInterface from "@/components/dashboard/ChatInterface";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { getConvexClient } from "@/lib/convex";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

interface ChatPageProps {
	params: Promise<{
		chatId: Id<"chats">;
	}>;
}

export default async function ChatPage({ params }: ChatPageProps) {
	const { chatId } = await params;

	const { userId } = await auth();

	if (!userId) {
		redirect("/");
	}

	try {
		const convex = getConvexClient();

		// Check if chat exists & user is authorized to view it
		const chat = await convex.query(api.chats.getChat, {
			id: chatId,
			userId,
		});

		if (!chat) {
			console.log(
				"⚠️ Chat not found or unauthorized, redirecting to dashboard"
			);
			redirect("/dashboard");
		}

		const initialMessages = await convex.query(api.messages.list, {
			chatId,
		});

		return (
			<div className="h-full w-full">
				<ChatInterface
					chatId={chatId}
					initialMessages={initialMessages}
				/>
			</div>
		);
	} catch (error) {
		console.error("Error loading chat: ", error);
		redirect("/dashboard");
	}
}
