import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { H1 } from '../assets/styles'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Spin from './Spin'
import Router from 'next/router'
import styled from 'styled-components'


const ImageContainer = styled.div`
  width: 70%;

  @media screen and (orientation: landscape) {
    width: 247px;
  }
`;

function Logopage() {

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
      <main className={styles.main} style={{'height': '100vh'}}>
        <ImageContainer>
          <Image 
            src={Logo}
            priority={true}
            layout='responsive'
            alt='Tickits Logo' 
          />
        </ImageContainer>
        <Spin />
        <H1 family='primary' align='center'>
          TICKITS 
        </H1>
      </main>
    </>
  )
}

export default Logopage