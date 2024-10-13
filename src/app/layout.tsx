import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CounterStoreProvider } from "@/providers/storeProvider";
import { createClient } from "@/utils/supabase/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverClient = createClient();
  const {
    data: { user }
  } = await serverClient.auth.getUser();
  console.log(user?.id);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CounterStoreProvider uid={user?.id}>
          {children}
        </CounterStoreProvider>
      </body>
    </html>
  );
}
