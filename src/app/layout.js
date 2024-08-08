import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/header";
import PostProvider from "../context/postProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuitMedia",
  description: "Navigate the Innovation to Unlock Digital Challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

      </Head>
      <body className={inter.className}>
        <PostProvider>
          <Header />
          {children}
        </PostProvider>
      </body>
    </html>
  );
}
