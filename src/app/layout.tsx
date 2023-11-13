import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import NavBar from "./components/NavBar";
import PageAnimation from "./components/utils/PageAnimation";
import Footer from "./components/Footer";

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
      <body className="">
        <Providers>
          {/* <PageAnimation /> */}
          <header className="top-0 sticky z-20 shadow-lg flex flex-row items-center justify-between center">
            <NavBar />
          </header>
          <main className="z-10 light-theme-animation">{children}</main>
        </Providers>
        <footer className="bg-secondary backdrop-blur">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
