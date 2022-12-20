import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Column } from '../assets/styles/Flex'
import { H4, Paragraph } from '../assets/styles'
import { Input } from '../assets/styles/Input'
import See from '../public/see_password.png'
import Hide from '../public/hide_password.png'
import { BaseButton } from '../assets/styles/Button/styled'
import { InputLabel } from '../assets/styles/InputLabel'
import { font, theme } from '../assets/variables'


export const SignIn = styled(Column)`
  form {
    width: 100%;
  }

  .folder {
    padding: 4rem 0;
  }

  .input-labels {
    padding: 0.5rem 0;
  }

  .toggle-password {
    position: relative;
    
    .eye {
      width: 23px;
      height: 17px;
      position: absolute;
      right: 1rem;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: 100vh;

    .folder {
      width: 50%;
      padding: 2rem 3rem;
      border-radius: 8px;
      border: 3px solid ${theme.black[400]};

      h4 {
        text-align: center;
      }
    }
  }
`;

export const SignupLink = styled(Paragraph)`
  a {
    font-weight: ${font.weights.semibold};
  }
`;

function Login() {
  //Stateful variable for Password toggle
  const [password, setPassword] = useState(false);

  return (
    <>
      <Head>
        <title> Tickits | Log In </title>
        <meta 
          name="description" 
          content="Log in to your account"
        />
        <link rel="icon" type='image/png' href="/logo.png" />
      </Head>

      <SignIn width='80%' margin='0 auto' justify='center' align='center'>
        <div className="folder">
          <H4 margin='0 0 2rem 0'> 
            Sign In 
          </H4>

          <form method="POST">
            <div className="input-labels">
              <InputLabel htmlFor='email'> 
                Email
              </InputLabel>
              <Input id='email' type='email'></Input>
            </div>
            <div className="input-labels">
              <InputLabel htmlFor='password'> 
                Password
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
                <Input id='password' type={password === true ? 'text' : 'password'}></Input>
              </div>
            </div>

            <Paragraph align='right' weight='light' style={{'textDecoration': 'underline'}}>  
              <Link href='/'> 
                Forgot Password? 
              </Link>
            </Paragraph>
            <BaseButton type="submit" variant='solid' radius='8px' width='270px' margin='2.5rem auto'> 
              <Link href={'/homepage'} as={'/homepage'}> Sign In </Link>
            </BaseButton>
            <SignupLink align='center'> 
              Don&#39;t have an account? 
              <Link href={'/signup'} as={'/signup'} passHref> Sign up </Link>
            </SignupLink>
          </form>
        </div>
      </SignIn>
    </>
  )
}

export default Login