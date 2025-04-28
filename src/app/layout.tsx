
import "./globals.css";
import { ReactNode } from "react";
import { ToastProvider } from "./providers/ToastProvider";

export const metadata = {
  title: "Business Dashboard",
  description: "Dashboard project with Next.js, TypeScript, TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      
      <body>
      <ToastProvider />
        {children}
      </body>
    </html>
  );
}
