"use client"
import { NextUIProvider, CssBaseline, createTheme } from "@nextui-org/react"
import React from "react"
import './globals.css'

const darkTheme = createTheme({
  type: 'dark'
})

export default function RootLayout(props) {
  const { children } = props
  return (
    <html lang="en">
      <head>
        {CssBaseline.flush()}
        <title>HOW TO CONSUME REST API</title>
      </head>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
