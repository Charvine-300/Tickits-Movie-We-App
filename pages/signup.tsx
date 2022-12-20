import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SignIn, SignupLink } from './login'
import See from '../public/see_password.png'
import { Input } from '../assets/styles/Input'
import Hide from '../public/hide_password.png'
import { H4, Paragraph } from '../assets/styles'
import { font, theme } from '../assets/variables'
import { InputLabel } from '../assets/styles/InputLabel'
import { BaseButton } from '../assets/styles/Button/styled'




const Signup = () => {
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

          <form method="POST">
            <div className="input-labels">
              <InputLabel htmlFor='name'> 
                Name
              </InputLabel>
              <Input id='name' type='text'></Input>
            </div>
            <div className="input-labels">
              <InputLabel htmlFor='email'> 
                Email
              </InputLabel>
              <Input id='email' type='email'></Input>
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
                  id='password'
                  type={password === true ? 'text' : 'password'} 
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
                  id='confirm-password'
                  type={confirm === true ? 'text' : 'password'} 
                ></Input>
              </div>
            </div>

            <Paragraph align='right' weight='light' style={{'textDecoration': 'underline'}}>  
              <Link href='/'> 
                Forgot Password? 
              </Link>
            </Paragraph>
            <BaseButton variant='solid' radius='8px' width='270px' margin='2.5rem auto'> 
              <Link href={'/homepage'} as={'/homepage'}> Sign In </Link>
            </BaseButton>
            <SignupLink align='center'> 
              Already have an account? 
              <Link href={'/login'} as={'/login'} passHref> Sign in </Link>
            </SignupLink>
          </form>
        </div>
      </SignIn>
    </>
  )
}

export default Signup