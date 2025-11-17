// src/pages/_app.tsx
import '@/styles/globals.css'
import CallButton from "@/components/CallButton";
import type { AppProps } from 'next/app'
import WhatsAppButton from '@/components/WhatsAppButton'





export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
      <CallButton/>

    
    </>
  )
}
