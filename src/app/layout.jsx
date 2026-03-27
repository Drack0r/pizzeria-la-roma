import "@/sass/main.scss";

import { Roboto } from "next/font/google";

import { Header } from "@/components/layout/Header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "La Roma - Accueil",
  description: "#",
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className} suppressHydrationWarning>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
