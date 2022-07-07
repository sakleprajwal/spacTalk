import {
    extendTheme,
  } from '@chakra-ui/react'
  
export const customTheme = extendTheme(
    {
      colors: {
        primary: 'tomato',
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
