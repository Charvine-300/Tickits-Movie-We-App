import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { H1 } from '../assets/styles'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Spin from './Spin'
import Router from 'next/router'


type Props = {}

function Logopage({}: Props) {

  useEffect(() => {
    const { pathname } = Router;

   setTimeout(() => {
    if (pathname === '/') {
      Router.push('/onboard')
    }
   }, 3000);
  }, [])


  return (
    <>
      <main className={styles.main}>
        <div>
          <Image 
            src={Logo}
            width={240} 
            height={270}
            alt='Tickits Logo' 
          />
        </div>
        <Spin />
        <H1 family='primary' align='center'>
          TICKITS 
        </H1>
      </main>
    </>
  )
}

export default Logopage