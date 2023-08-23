"use client";
import { ChakraProvider } from "@chakra-ui/react";

import WithSubnavigation from "@/components/Navbar";
import SmallWithSocial from "@/components/Footer";

import { extendTheme } from "@chakra-ui/react";

import { Oswald } from '@next/font/google';

const oswald = Oswald({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal']
})

const theme = extendTheme({
  fonts: {
    heading: oswald.style.fontFamily,
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */} 
      <head />

      <body style={{ background: "#FAF5FF" }}>
        <ChakraProvider theme={theme}>
          <div>
            <WithSubnavigation />
            {children}
            <SmallWithSocial />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
