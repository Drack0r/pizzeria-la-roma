import "@/sass/main.scss";

export const metadata = {
  title: "La Roma - Accueil",
  description: "#",
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
