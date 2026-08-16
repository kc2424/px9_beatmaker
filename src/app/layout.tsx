import type { Metadata } from "next";
import { Oswald, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PX-9 — 8BIT IS NOT A LIMITATION. IT'S A CHOICE.",
  description:
    "PX-9 is a chiptune beatmaker rebuilding retro sound chip constraints with modern BPM and mix production.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${oswald.variable} ${inter.variable} ${robotoMono.variable}`}
    >
      <body className="antialiased selection:bg-[#cc6437] selection:text-white bg-[#0b0b0b] text-[#ffffff] min-h-screen">
        {children}
      </body>
    </html>
  );
}
