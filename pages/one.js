import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function One() {
  return (
    <div className={styles.container}>
      <Head>
        <title>One</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>One</h1>
        <Link href="/">⬅️ Back to home</Link>
      </main>
    </div>
  )
}
