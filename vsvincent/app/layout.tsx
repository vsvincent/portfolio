import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Vincent von Schilling",
    template: "%s | vincentvonschilling",
  },
  description: "Full-stack developer passionate about FP, Cloud, and OOP",
  openGraph: {
    title: "vincentvonschilling",
    description:
      "Full-stack developer passionate about FP, Cloud, and OOP",
    url: "vincentvonschilling.com",
    siteName: "vincentvonschilling.com",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/vincentvonschilling.appspot.com/o/vfavicon.png?alt=media&token=90a8ce74-7d91-4779-adc0-1df25e8b445c",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "vsvincent",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
