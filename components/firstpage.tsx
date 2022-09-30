import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../assets/images/tickits_logo.png'
import { H1 } from '../assets/components'

type Props = {}

export default function FirstPage({}: Props) {
  return (
    <>
      <main className={styles.main}>
        <Image src={Logo} alt='Tickits Web Application Logo' />
        <H1 align='center' font='primary'> 
          TICKITS 
        </H1>
      </main> 
    </>
  )
}