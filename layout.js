import "./globals.css";

export const metadata = {
  title: "Harry | 3D Portfolio",
  description: "Full Stack Developer Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
