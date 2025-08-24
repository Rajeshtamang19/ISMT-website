import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "ISMT College - International School of Management and Technology",
  description:
    "Established in 2011, ISMT offers internationally recognized UK qualifications in partnership with University of Sunderland and Pearson Edexcel.",
  generator: "Rajesh Bomjan Tamang",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
