import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UserProvider from "@/components/UserProvider";
import MenuBar from "@/components/MenuBar";

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <UserProvider>
          <MenuBar />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
