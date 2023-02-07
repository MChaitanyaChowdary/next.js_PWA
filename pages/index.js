import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='manifest' href="/manifest.json" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Hi welcome to :
            <code className={styles.code}>Ashv Finance</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div>
          <h1>
            hi trying to implent the next js PWA
          </h1>
          </div>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <div className={styles.thirteen}>
            <Image
              src="data:image/jpeg;base64,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"
              alt="13"
              width={40}
              height={31}
              priority  
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Here we can find the documents of the users.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Loans <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              here we can able to access the loan documents.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Users <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Here by clicking on it we view the list of the users.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact US <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Ashv Finance lmtd, Bangalore,India 
              contact_num: 0803728723.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
