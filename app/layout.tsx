import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eliazar Noa — Backend Developer | Go | Microservices | IoT",
  description:
    "Ingeniero de Sistemas especializado en backend con Go, arquitectura hexagonal y microservicios. Proyectos: SEGETRAN, MacSalud, ODIN, CONCETUR, ISIWEEK POS.",
  keywords: [
    "Eliazar Noa",
    "Backend Developer",
    "Golang",
    "Microservices",
    "IoT",
    "Hexagonal Architecture",
    "Clean Architecture",
    "SEGETRAN",
    "MacSalud",
    "Cusco",
    "Perú",
  ],
  authors: [{ name: "Eliazar Noa" }],
  openGraph: {
    title: "Eliazar Noa — Backend Developer | Go | Microservices | IoT",
    description:
      "Portfolio profesional de Eliazar Noa — Backend Developer especializado en Go, microservicios y sistemas IoT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
