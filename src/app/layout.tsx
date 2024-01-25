import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import RandomNews from "./components/RandomNews";
import styles from "./layout.module.css";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Difras News",
  description:
    "Difras News, sua fonte confiável e ágil de informações, trazendo notícias relevantes e atualizadas para mantê-lo informado sobre os acontecimentos mais importantes do mundo.",
  openGraph: {
    title: "Difras News",
    description:
      "Difras News, sua fonte confiável e ágil de informações, trazendo notícias relevantes e atualizadas para mantê-lo informado sobre os acontecimentos mais importantes do mundo.",
    type: "article",
    authors: "SamGularte",
  },
  keywords: ["noticias", "notícias", "difras", "difras news"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main>
          <Header />
          <section className={styles.sectionContainer}>
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
