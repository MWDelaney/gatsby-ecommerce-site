export default {
  colors: {
    text: "#222",
    background: 'white',
    primary: 'RoyalBlue',
    modes: {
      dark: {
        text: 'white',
        background: '#222'
      }
    }
  },
  fonts: {
    heading: 'Georgia, serif'
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  heading: {
    fontFamily: 'heading',
    textTransform: 'uppercase',
    color: 'primary',
    py: 2,
    my: 2
  },
  text: {
    default: {
      color: 'warning',
      mb: 5,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2rem',
    },
    pants: {
      fontFamily: 'cursive'
    }
  }
}
