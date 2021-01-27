import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Headless Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
              <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="/blog">BLOG</a></li>
                  <li><a href="#">CONTACT</a></li>
              </ul>
          </nav>

      <main className={styles.main}>
      
      <h1 className={styles.title}>Headless Blog</h1>

      <p>
        Read more{' '}
        <Link href='/blog'>
          <a>></a>
        </Link>
      </p>

      

       
     
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
