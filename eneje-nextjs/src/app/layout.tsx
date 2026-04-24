import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eneje Consulting | Objective Coaching Intelligence",
  description:
    "Eneje Consulting, powered by Coaching AI, delivers a new standard in coaching evaluation — combining data, leadership analysis, and predictive modeling for better decisions across collegiate and professional sports.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
