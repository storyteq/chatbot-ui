"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export default function HomePage() {
  const { theme } = useTheme()

  const startChatting = async () => {
    window.location.replace("/login")
  }

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="mt-2 text-4xl font-bold">Chatbot UI</div>

      <Button
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        onClick={startChatting}
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Button>
    </div>
  )
}
