import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  gap: '$20',
  marginLeft: 'auto',
  alignItems: 'center',
  height: '100vh',
  maxWidth: 'calc(100vw - (100vw - 1240px)/2)',
})

export const Hero = styled('div', {
  maxWidth: '480px',
  padding: '0 $10',

  [`>${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`>${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRigth: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
