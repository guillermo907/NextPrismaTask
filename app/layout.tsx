"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import "./globals.scss";
import { theme, darkTheme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en">
      <body className={`${inter.className} ${darkMode ? "darkmode" : ""}`}>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <SessionProvider>
            <CssBaseline />
            <Header
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
