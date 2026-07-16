import type { Metadata } from "next";
import { headers } from "next/headers";
import { Be_Vietnam_Pro } from "next/font/google";
import { coupleNames, weddingConfig } from "@/config/wedding";
import "./globals.css";

const body = Be_Vietnam_Pro({ variable: "--font-body", subsets: ["latin", "vietnamese"], weight: ["400", "500", "600"] });

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`);
  return {
    metadataBase: base,
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    robots: weddingConfig.seo.public ? { index: true, follow: true } : { index: false, follow: false },
    icons: { icon: "/og.png", shortcut: "/og.png", apple: "/og.png" },
    openGraph: { type: "website", locale: "vi_VN", url: base, siteName: coupleNames, title: weddingConfig.seo.title, description: weddingConfig.seo.description, images: [{ url: new URL("/og.png", base), width: 1200, height: 630, alt: `Thiệp cưới ${coupleNames}` }] },
    twitter: { card: "summary_large_image", title: weddingConfig.seo.title, description: weddingConfig.seo.description, images: [new URL("/og.png", base)] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontFamilies = {
    "--font-body": body.style.fontFamily,
  } as React.CSSProperties;

  return <html lang="vi"><body className={body.variable} style={fontFamilies}>{children}</body></html>;
}
