import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Container } from 'semantic-ui-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ceep Aureo de Oliveira Filho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Container>
        <Header title="Ceep Aureo de Oliveira Filho" />
            Hello World!!!
          </Container>
        <Footer />
      </main>
    </>
  )
}
