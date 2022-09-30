import React from 'react'
import Image from 'next/image'
import Smartphone from '../assets/images/smartphone.png'
import styles from '../styles/Home.module.css'
import { Paragraph } from '../assets/components'


type Props = {}

export default function Onboarding({}: Props) {
  return (
    <>
    <main className={styles.main}>
      <Image src={Smartphone} alt='Smartphone' />
      <Paragraph font='secondary' weight='semibold' align='center'>
        Book tickets from the comfort of your home or office
      </Paragraph>
    </main> 
  </>
  )
}