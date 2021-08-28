const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage:theme=>({
          
          'imgmask':"url('assets/img/bka.svg')",
        }),
        padding:{
            'full':'100%',
            '1/2':'50%',
            '3/4':'75%',
            '3/10':"30%",
        },
        fontSize:{
          'zero':'0',
        }
      },
      
      
      textIndent: (theme,{negative})=>({
        ...{
          sm: '1.75rem',
          md: '2rem',
          lg: '2.25rem',
        },
        ...negative({
          sm: '-1.75rem',
          md: '-2rem',
          lg: '-2.25rem',
        })
      }),
      colors:{
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        blue:colors.blue,
        green:colors.green,
        white: {
          base:"#ffffff"
        }
      }

    },
    variants: {
      extend: {},
      textIndent: ['responsive'],
    },
    plugins: [
      require('tailwindcss-text-indent')()
    ],
  }