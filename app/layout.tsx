import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import NextAuthProvider from "./providers/nextauthsession";
import { ReactQueryProvider } from "./providers/reactqueryprovider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthProvider>
          <ReactQueryProvider>
            <div>{children}</div>
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
