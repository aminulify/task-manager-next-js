import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          {children}
        </div>
        </body>
    </html>
  );
}
