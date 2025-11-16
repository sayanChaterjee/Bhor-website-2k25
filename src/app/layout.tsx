import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Images } from "./assets/CloudinaryAssets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhor 2k25 | KGEC Official Magazine",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Welcome to Bhor 2k25, the official magazine of Kalyani Government Engineering College! Dive into a vibrant collection of stories, innovations, and creative expressions from the talented students of KGEC. From groundbreaking technical articles and student achievements to artistic showcases and campus life chronicles, Bhor captures the essence of engineering brilliance meets creative passion. Experience the voice of KGEC's diverse community—where every page tells a story of growth, imagination, and excellence.",
  keywords: [
    "KGEC",
    "Kalyani Government Engineering College",
    "magazine",
    "Bhor",
    "student contributions",
    "engineering",
    "creativity",
    "innovation",
  ],
  openGraph: {
    title: "Bhor 2k25 | KGEC Official Magazine",
    description:
      "The official magazine showcasing the best of KGEC—student stories, innovations, and creative expressions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[5vw] md:h-[3vw] min-h-[20px] max-h-[60px] ">
            <Image
              src={Images.borderHorizontal}
              alt="Border"
              width={1920}
              height={1080}
              className="w-full h-full z-50"
            />
          </div>

          <div className="w-full h-[3vw] min-h-[20px] max-h-[60px]">
            <Image
              src={Images.borderHorizontal}
              alt="Border"
              width={1920}
              height={1080}
              className="w-full h-[5vw] lg:h-[3vw] z-50 fixed bottom-0 left-0"
            />
          </div>

          <div className="fixed left-0 top-0 lg:w-12 w-6 h-full">
            <Image
              src={Images.borderVertical}
              alt="Border"
              width={1920}
              height={1080}
              className="w-full h-[105%] z-100"
            />
          </div>

          <div className="fixed right-0 top-0 lg:w-12 w-6 h-full">
            <Image
              src={Images.borderVertical}
              alt="Border"
              width={1920}
              height={1080}
              className="w-full h-[105%] z-100"
            />
          </div>
        </div>
      </body>
    </html>
  );
}