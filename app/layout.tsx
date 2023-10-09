'use client'
import './globals.css'
import { useEffect } from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.min.js')
    }
  })
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
