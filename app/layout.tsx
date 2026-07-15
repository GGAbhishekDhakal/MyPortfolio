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
  title: "Abhishek Dhakal — ASP.NET Developer",
  description:
    "Full Stack Developer specializing in C#, ASP.NET Core, and SQL Server. Building reliable, scalable web applications in Kathmandu, Nepal.",
  keywords: [
    "Abhishek Dhakal",
    "ASP.NET Developer",
    "C# Developer",
    ".NET Core",
    "Full Stack Developer",
    "Kathmandu",
    "Nepal",
  ],
  openGraph: {
    title: "Abhishek Dhakal — ASP.NET Developer",
    description:
      "Full Stack Developer specializing in C#, ASP.NET Core, and SQL Server.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
