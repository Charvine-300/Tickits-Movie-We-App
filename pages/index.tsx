import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Logopage from '../components/logopage'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Home: NextPage = () => {

  return (
      <Fragment>
        <Head>
          <title> Tickits </title>
          <meta 
            name="description" 
            content="Book tickets from the comfort of your home or office" 
          />
          <link rel="icon" type='image/png' href="/logo.png" />
        </Head>

        <main className={styles.container}>
          <Logopage />
        </main>
      </Fragment>
  )
}

export default Home
