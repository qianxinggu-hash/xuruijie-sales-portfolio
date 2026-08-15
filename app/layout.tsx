import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "徐睿婕｜销售与商务拓展",
  description: "销售、商务拓展、品牌活动与内容增长个人作品集。",
  openGraph: {
    title: "徐睿婕｜销售与商务拓展",
    description: "从需求识别、商务推进到活动落地和内容传播。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "徐睿婕销售与商务拓展作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "徐睿婕｜销售与商务拓展",
    description: "从需求识别、商务推进到活动落地和内容传播。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
