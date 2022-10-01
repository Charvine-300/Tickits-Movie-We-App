import React from 'react'
import styles from '../styles/Home.module.css'
import { Paragraph } from '../assets/styles'

type Props = {}

function Footer({}: Props) {
  return (
    <>
      <footer className={styles.footer}>
        <Paragraph family='secondary' weight='medium' align='center' margin='0' >
          &copy;2022 Triftpay. All rights reserved.
        </Paragraph>
      </footer>
    </>
  )
}

export default Footer