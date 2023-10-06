import './globals.css'
import type { Metadata } from 'next'
import {ZenMaruGothic} from "@/app/fonts";
import UserProvider from "@/components/UserProvider";
import MenuBar from "@/components/MenuBar";

export const metadata: Metadata = {
  title: 'Icecream Kana Game',
  description: 'A game for learning Japanese characters in the form of collecting ice-cream scoops. 🍦 Enjoy!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ZenMaruGothic.className}>
        <UserProvider>
          <MenuBar />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
