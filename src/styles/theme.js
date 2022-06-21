import {
    extendTheme,
  } from '@chakra-ui/react'
  
export const customTheme = extendTheme(
    {
      colors: {
        primary: '#6C5DD3',
        lightGrey: '#808191',
        lightBlue: '#242731'
      },
      fonts: {
        body: 'Lexend, sans-serif',
        heading: 'Lexend, sans-serif',
        mono: 'Lexend, sans-serif',
      },

    },
  )
