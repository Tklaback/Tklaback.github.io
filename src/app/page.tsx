'use client'
import theme from "../../theme"
import { NextUIProvider } from '@nextui-org/react';



export default function Default() {
  return (
      <NextUIProvider theme={theme}>
        <h1>Hello World</h1>
      </NextUIProvider>
  )
}
