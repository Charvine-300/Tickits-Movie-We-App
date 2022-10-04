import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { SignIn, SignupLink } from './login'
import { H4, Paragraph } from '../assets/styles';
import { Input } from '../assets/styles/Input';
import See from '../public/see_password.png'
import Hide from '../public/hide_password.png';
import { BaseButton } from '../assets/styles/Button/styled';
import { InputLabel } from '../assets/styles/InputLabel';
import { font, theme } from '../assets/variables'


function Signup() {
  //Stateful variable for Password toggle
  const [password, setPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  

  return (
    <>
      <Head>
        <title> Tickits | Sign Up </title>
        <meta 
          name="description" 
          content="Sign up for an account on Tickits"
        />
        <link rel="icon" type='image/png' href="/logo.png" />
      </Head>

      <SignIn width='80%' margin='0 auto' justify='center' align='center' padding='2rem 0'>
        <div className="folder">
        <H4 margin='0 0 2rem 0'> 
          Sign Up
        </H4>
        <form action="" method="post">
        <div className="input-labels">
            <InputLabel htmlFor='name'> 
              Name
            </InputLabel>
            <Input id='name'></Input>
          </div>
          <div className="input-labels">
            <InputLabel htmlFor='email'> 
              Email
            </InputLabel>
            <Input id='email'></Input>
          </div>
          <div className="input-labels">
            <InputLabel htmlFor='password'> 
              Create Password
            </InputLabel>
            <div className="toggle-password">
              <div className="eye" onClick={() => {if (password) {
                setPassword(false)}
                else { setPassword(true)}
              }}>
                <Image 
                  src={password === true ? Hide : See} 
                  layout='responsive'
                  priority={true}
                  alt='Password Toggle' 
                />
              </div>
              <Input 
                type={password === true ? 'text' : 'password'} 
                id='password'
              ></Input>
            </div>
          </div>
          <div className="input-labels">
            <InputLabel htmlFor='confirm-password'> 
              Confirm Password
            </InputLabel>
            <div className="toggle-password">
              <div className="eye" onClick={() => {
                if (confirm) { setConfirm(false) }
                else { setConfirm(true) }
              }}>
                <Image 
                  src={confirm === true ? Hide : See} 
                  layout='responsive'
                  priority={true}
                  alt='Password Toggle' 
                />
              </div>
              <Input 
                type={confirm === true ? 'text' : 'password'} 
                id='confirm-password'
              ></Input>
            </div>
          </div>
        </form>
        <Paragraph align='right' weight='light' style={{'textDecoration': 'underline'}}>  
          <Link href='/'> 
            Forgot Password? 
          </Link>
        </Paragraph>
        <BaseButton variant='solid' radius='8px' width='270px' margin='2.5rem auto'> 
          Sign In
        </BaseButton>
        <SignupLink align='center'> 
          Already have an account? 
          <Link href={'/login'} as={'/login'}> Sign in </Link>
        </SignupLink>
        </div>
      </SignIn>
    </>
  )
}

export default Signup