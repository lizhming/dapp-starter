import Head from 'next/head'
import styles from 'styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>header</header>

      <main className={styles.main}>body</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  )
}
