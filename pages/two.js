import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Two() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Two</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Two</h1>
        <Link href="/">⬅️ Back to home</Link>
      </main>
    </div>
  )
}
