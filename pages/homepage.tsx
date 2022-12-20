import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'


type Props = {}

const Homepage = ({}: Props) => {

  return (
    <>
      <Head>
        <title> Tickits | Homepage </title>
        <meta 
          name="description" 
          content="Book tickets from the comfort of your home or office" 
        />
        <link rel="icon" type='image/png' href="/logo.png" />
      </Head>
      
      <Header />
    
    </>
  )
}

export default Homepage