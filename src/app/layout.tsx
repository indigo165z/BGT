import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { COMPANY } from "@/lib/constants";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brisbanegreastraps.com.au"),
  title: {
    default: "Grease Trap Cleaning Brisbane | Brisbane Grease Traps",
    template: "%s | Brisbane Grease Traps",
  },
  description:
    "Professional grease trap cleaning, installation, maintenance, and compliance certification for Brisbane restaurants and commercial kitchens. Call 0459 410 785.",
  keywords: [
    "grease trap cleaning Brisbane",
    "grease trap service Brisbane",
    "commercial kitchen grease trap",
    "grease trap installation Brisbane",
    "grease trap compliance Brisbane",
    "wash down bay Brisbane",
    "oil separator Brisbane",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://brisbanegreastraps.com.au",
    siteName: COMPANY.name,
    title: "Grease Trap Cleaning Brisbane | Brisbane Grease Traps",
    description:
      "Professional grease trap services for Brisbane businesses. Call 0459 410 785.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grease Trap Cleaning Brisbane | Brisbane Grease Traps",
    description: "Professional grease trap services for Brisbane. Call 0459 410 785.",
  },
  alternates: { canonical: "https://brisbanegreastraps.com.au" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmSerif.variable} ${geistMono.variable} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
