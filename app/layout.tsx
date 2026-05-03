import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: 'Ajay Kaviti | Senior Cloud Data Engineer',
  description: 'Senior Cloud Data Engineer with 5+ years designing and operating cloud-native data platforms on Snowflake, AWS, and Azure. Certified SnowPro Core and Microsoft Azure DP-203.',
  keywords: ['Data Engineer', 'Cloud Engineer', 'Snowflake', 'AWS', 'Azure', 'dbt', 'Airflow', 'ETL', 'Data Pipelines'],
  authors: [{ name: 'Ajay Kaviti' }],
  openGraph: {
    title: 'Ajay Kaviti | Senior Cloud Data Engineer',
    description: 'Senior Cloud Data Engineer with 5+ years designing and operating cloud-native data platforms.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
