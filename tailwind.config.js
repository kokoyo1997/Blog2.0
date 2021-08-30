const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage:theme=>({
          'imgpad':"url('assets/img/cover.jpeg')",
          'imgmask':"url('assets/img/bka.svg')",
          'imglabel1':"url('assets/img/img-c1.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel2':"url('assets/img/img-c2.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel3':"url('assets/img/img-c3.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel4':"url('assets/img/img-c4.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel5':"url('assets/img/img-c5.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel6':"url('assets/img/img-c6.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel7':"url('assets/img/img-c7.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel8':"url('assets/img/img-c8.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel9':"url('assets/img/img-c9.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel10':"url('assets/img/img-c10.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel11':"url('assets/img/img-c11.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel12':"url('assets/img/img-c12.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
          'imglabel13':"url('assets/img/img-c13.jpg'),linear-gradient(to right, rgb(245, 245, 245), rgb(255,255,255))",
        }),
        padding:{
            'full':'100%',
            '1/2':'50%',
            '3/4':'75%',
            '3/10':"30%",
        },
        flex:{
          '2':'2 2 0%',
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