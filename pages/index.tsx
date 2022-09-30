import type { NextPage } from 'next'
import Head from 'next/head'
import FirstPage from '../components/firstpage'
import Onboarding from '../components/onboarding'
import styles from '../styles/Home.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Home: NextPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    /*if (typeof window === 'object') {
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
          navigate('/onboarding')
        }, 3000)
      });
    }*/
    alert("Finished Loading!");
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title> Tickits </title>
        <meta 
          name="description" 
          content="Book tickets from the comfort of your home or office." 
        />
        <link rel="icon" type='image/png' href="/favicon.png" />
      </Head>

      <Routes>
        <Route 
          path='/' 
          element={<FirstPage />}
        />
        <Route 
          path='/onboarding'
          element={<Onboarding />}
        />
      </Routes>    
    </div>
  )
}

export default Home
