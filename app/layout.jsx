import { Header } from "@/src/components/layout";

import "@/src/styles/global.css";

export const metadata = {
  title: "La Roma",
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}

export default RootLayout;
