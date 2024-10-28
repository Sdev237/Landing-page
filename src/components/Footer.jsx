import React from 'react'
import { Container } from './Container'
import { social } from '../constants'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const renderSocialLinks = () => (
    <div className='flex items-center gap-4'>
      {social.map(({id, alt, link, ico}) => (
        <a 
          key={id}
          title={alt} 
          href={link}
          target="_blank" 
          rel="noreferrer"
        >
          <img src={ico} alt={alt} width={20} height={20} />
        </a>
      ))}
    </div>
  )

  const renderLinks = () => (
    <div className='space-x-4'>
      {['Terms of Service', 'Privacy Policy', 'About'].map(text => (
        <a key={text} href='#/' target="_blank" rel="noreferrer">
          {text}
        </a>
      ))}
    </div>
  )

  return (
    <div className='bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16'>
      <Container className="footer">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3">
          {renderSocialLinks()}
          {renderLinks()}
          <div>
            &copy; {currentYear} All right reserved{" "}
            <a href='#/' target="_blank" rel="noreferrer">
              Sdev Sap & Remote Monkey
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
