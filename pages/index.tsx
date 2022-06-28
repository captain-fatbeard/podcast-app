import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Polak & Brandmanden</title>
        <meta name="description" content="upcomming podcast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.container}>
      <div className={styles.glitch} data-text="COMMING SOON">COMMING SOON</div>
      <div className={styles.glow}>COMMING SOON</div>
      <p className={styles.subtitle}>Polak & Brandmanden</p>

    </div>
    <div className={styles.scanlines}></div>

      {/* <Image
          alt='teaser'
          src='/teaser.jpg'
          width={388}
          height={402}
        /> */}



    {/* // <div className={styles.container}>
    //   <Head>
    //     <title>Polak & Brandmanden</title>
    //     <meta name="description" content="upcomming podcast" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>Polak & Brand&shy;manden</h1>
    //     <h2 className={styles.subTitle}>COMMING SOON</h2>




    //   </main> */}
    </div>
  )
}

export default Home
