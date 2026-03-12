import "@/src/styles/global.css";

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
