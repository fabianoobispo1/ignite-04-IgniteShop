import type { AppProps } from 'next/app'
import { Container, Header } from "../styles/pages/app";
import { globalStyles } from '../styles/global'

import { CartProvider } from "use-shopping-cart";
import { HeaderComponent } from "../components/Header";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY!}
      successUrl="http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}"
      cancelUrl={process.env.NEXT_URL!}
      currency="BRL"
      billingAddressCollection={true}
      shouldPersist={true}
  >
      <Container>
        <Header>
          <HeaderComponent />
        </Header>
        <Component {...pageProps} />
      </Container>

  </CartProvider>
</>

)
}