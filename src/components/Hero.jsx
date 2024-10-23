import React from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { uiInterface } from '../assets'
import { Grid } from './theme/Hero'

export const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div className='text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7'>
        <h1 className='hero'>
          Build {" "} 
          <span className='bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2'>
            Modern 
          </span> {" "}
          Sass for Startups
        </h1>
        <p className='body-1 text-n-5'>
          Transform your vision into reality with our innovative SaaS platform. 
          Designed for ambitious startups, our solution provides essential tools 
          to accelerate your growth and streamline your operations.
        </p>
        <Button theme={"primary"} href={"/#spacing"}>Get Started</Button>
        <img src={uiInterface} alt='Ui Interface illustration' />
        </div>
      </Container>
      <Grid />
    </div>
  )
}
