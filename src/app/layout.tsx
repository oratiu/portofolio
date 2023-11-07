import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octavian Ratiu",
  description: "A personal portofolio for Octavian Ratiu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="top-0 sticky z-50 shadow-lg flex flex-row items-center justify-between center">
            <NavBar />
          </header>
          <main>
            <div className="area">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            {children}
          </main>
          {/* <footer className="bottom-0 sticky z-50 shadow-lg flex flex-row items-center justify-between center">this is the footer</footer> */}
        </Providers>
      </body>
    </html>
  );
}
