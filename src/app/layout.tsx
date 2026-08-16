import type { Metadata } from "next";
import { Alegreya, New_Tegomin, Roboto_Mono } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya",
  display: "swap",
});

const newTegomin = New_Tegomin({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-new-tegomin",
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
      className={`${alegreya.variable} ${newTegomin.variable} ${robotoMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=New+Tegomin&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#cc6437] selection:text-white bg-[#0b0b0b] text-[#ffffff] min-h-screen">
        {children}
      </body>
    </html>
  );
}
