import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/cards'
import Title from '../components/title'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem vindo ao projeto em grupo!
          </h1>

          <p className={styles.description}>
            Agora analisem o arquivo index.tsx na pasta pages
          </p>


          <div className={styles.grid}>

          
            <Card href="https://nextjs.org/learn"> 
              <Title style={{color: 'red'}}> Encontre o erro  &rarr;</Title>
              <p>Após concluir o trabalho suba o código no github do grupo</p>
            </Card>


            <Card href="https://nextjs.org/learn"> 
              <Title style={{color: 'black'}}>Crie um repositório &rarr;</Title> 
              <p>Após concluir o trabalho suba o código no github do grupo</p>
            </Card>

            <Card
              href="https://github.com/vercel/next.js/tree/canary/examples"
            >
              <Title style={{color: 'black'}} >Evite componentes demais &rarr;</Title>
              <p>Crie somente componentes essenciais.</p>
            </Card>

            <Card
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <Title style={{color: 'black'}}>Trabalho em grupo &rarr;</Title>
              <p>
                Ajude para que todos do grupo participe, envolva-se.
              </p>
            </Card>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
