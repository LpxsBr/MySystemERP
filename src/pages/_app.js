import Theme from "@/components/theme"
import './../styles/Globals.css'
import { SessionProvider } from "next-auth/react"
import { useState } from "react"

export default function App(
  {
    Component,
    pageProps: { session, ...pageProps },
  }){

  const [theme, setTheme] = useState('dark')

  return (
    <>
      <SessionProvider session={session}>
        <Theme theme={theme}>
          <Component {...pageProps} />
        </Theme>
      </SessionProvider>
    </>
  )
}