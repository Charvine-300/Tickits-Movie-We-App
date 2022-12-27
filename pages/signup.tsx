import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SignIn, SignupLink } from './login'
import See from '../public/see_password.png'
import { useForm } from 'react-hook-form'
import Hide from '../public/hide_password.png'
import { H4, Paragraph } from '../assets/styles'
import { font, theme } from '../assets/variables'
import { RegisterInput } from '../interfaces.type'
import styles from '../styles/Home.module.css'
import { InputLabel } from '../assets/styles/InputLabel'
import { BaseButton } from '../assets/styles/Button/styled'




const Signup = () => {
  //Stateful variable for Password toggle
  const [password, setPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  
  //Setting up form validation
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
    mode: 'onChange'
  });
  
  const onSubmit = (data: any) => console.log(`Email input value: ${data.email}`);
  

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

          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-labels">
              <InputLabel htmlFor='name'> 
                Name
              </InputLabel>
              <input className={styles.inputbar} id='name' type='text' {...register("name", { required: true })} />
              {errors.name && <Paragraph color={theme.red[500]}> This field is required </Paragraph>}
            </div>
            <div className="input-labels">
              <InputLabel htmlFor='email'> 
                Email
              </InputLabel>
              <input className={styles.inputbar} {...register("email", {required: true})} id='email' type='email'/>
              {errors.email && <Paragraph color={theme.red[500]}> This field is required </Paragraph>}
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
                <input 
                  id='password'
                  className={styles.inputbar}
                  {...register("createPassword", { required: true })}
                  type={password === true ? 'text' : 'password'} 
                />
              </div>
              {errors.createPassword && <Paragraph color={theme.red[500]}> This field is required </Paragraph>}
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
                <input 
                  id='confirm-password'
                  className={styles.inputbar}
                  {...register("confirmPassword", { required: true })}
                  type={confirm === true ? 'text' : 'password'} 
                />
              </div>
              {errors.confirmPassword && <Paragraph color={theme.red[500]}> This field is required </Paragraph>}
            </div>

            <Paragraph align='right' weight='light' style={{'textDecoration': 'underline'}}>  
              <Link href='/'> 
                Forgot Password? 
              </Link>
            </Paragraph>
            <BaseButton variant='solid' radius='8px' width='270px' margin='2.5rem auto'> 
              <Link href={'/homepage'} as={'/homepage'}> Sign Up </Link>
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