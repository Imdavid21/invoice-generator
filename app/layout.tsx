import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://default-url.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Free Invoice Tool: Instant Invoice Generator, Easy & Professional Invoicing",
  description: "Generate professional invoices fast with Free Invoice Tool. Free invoice generator, simple invoicing software for small businesses, freelancers, and contractors. No ads, no sign-up, easy and quick invoice creation.",
  keywords: [
    "Free Invoice Tool", "invoice generator", "free invoice generator", 
    "online invoice generator", "invoice maker", "free invoice tool", 
    "instant invoice", "invoice software", "professional invoices", 
    "simple invoicing tool", "invoice template", "billing software", 
    "invoice creation", "invoice for small business", "contractor invoice", 
    "freelance invoice", "quick invoice generator", "easy invoice software", 
    "invoice generator online", "create invoices", "generate invoices free", 
    "small business invoice", "freelancer invoice tool", "free billing software", 
    "simple invoice generator", "invoice without ads", "no sign-up invoicing", 
    "professional invoice maker", "invoice management tool", "automated invoicing", 
    "best free invoice generator", "easy invoice templates", "invoice and billing tool", 
    "client invoice generator", "business invoicing tool", "send invoices online", 
    "invoice pdf generator", "invoice tool free", "customizable invoices", 
    "simple invoice software", "user-friendly invoice maker", "modern invoice templates", 
    "invoice maker for freelancers", "small business billing tool", "best invoice generator", 
    "fast invoice generator", "invoices for contractors", "quick billing tool", 
    "invoice generator no sign-up", "digital invoices", "professional billing software", 
    "easy billing generator", "best free invoice tool", "instant invoicing", "generate PDF invoice"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Free Invoice Tool: Create & Send Professional Invoices in Minutes",
    description: "Generate professional invoices fast with Free Invoice Tool. Free invoice generator, simple invoicing software for small businesses, freelancers, and contractors. No ads, no sign-up, easy and quick invoice creation.",
    url: process.env.NEXT_PUBLIC_URL || "https://default-url.com",
    type: "website",
    images: "/og-image.jpeg",
    siteName: "Free Invoice Tool",
  },
  twitter: {
    card: "summary_large_image",
    site: "@FreeInvoiceTool",
    creator: "@FreeInvoiceTool",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
