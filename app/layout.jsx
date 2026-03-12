import { Header } from "@/src/components/layout";

import "@/src/styles/global.css";

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        <Header />

        {children}
      </body>
    </html>
  );
}

export default RootLayout;
