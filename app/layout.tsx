import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Next Interview Lab",
  description: "A progressive TypeScript and Next.js interview practice track.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
