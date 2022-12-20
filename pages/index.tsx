import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Logopage from '../components/logopage'
import { GetServerSideProps } from 'next'
import { PopularMoviesProps } from '../interfaces.type'



const Home = ({ results }: PopularMoviesProps) => {
  console.log(results);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9e9c7db71942caaa2de1b8d125418d3c&language=en-US&page=4');
  const data = await res.json();
  const results = data;

  return {
    props: {
      results
    }
  }
}
