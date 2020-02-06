import React from 'react'
import { APLICATION_NAME } from '../../costants/AplicationCostants'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Tabs, Tab, Box, Grid } from '@material-ui/core'
import { LocationOn, Phone, Email } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function NavBar({ value, handleChange }) {
  return (
    <Box component='div' className='navbar'>
      <AppBar position='static' className='headers'>
        <Toolbar className='header'>
          <Typography variant='h6' className='header__name'>
            {APLICATION_NAME}
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
            className='header__tabs'
          >
            <Tab className='header__tab' label='Home' value='/' />
            <Tab className='header__tab' label='Dogs' value='/dogs' />
            <Tab className='header__tab' label='Cats' value='/cats' />
            <Tab className='header__tab' label='Others' value='/others' />
            <Tab className='header__tab' label='Contact' value='/contact' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

function ContactBar() {
  return (
    <Grid
      component='div'
      className='contact'
      container
      justify='space-between'
      alignItems='center'
      fontSize={10}
    >
      <Grid
        component='div'
        className='contact__left'
        container
        justify='space-around'
        item
        xs
        alignItems='center'
      >
        <Grid
          component='span'
          className='contact__right-address'
          container
          justify='flex-start'
          item
          xs={2}
          alignItems='center'
        >
          <LocationOn />
          Address
        </Grid>
        <Grid
          component='span'
          container
          justify='flex-start'
          item
          xs={3}
          alignItems='center'
          className='contact__right-email'
        >
          <Email />
          adoption@pet.mail
        </Grid>
        <Grid
          component='span'
          className='contact__right-phone'
          container
          justify='flex-start'
          item
          xs
          alignItems='center'
        >
          <Phone />
          +506 8573-9587
        </Grid>
      </Grid>
      <Grid
        component='div'
        className='contact__right'
        container
        justify='flex-end'
        item
        xs
        alignItems='center'
      >
        <Box component='span' className='contact__right-text'>
          Don't forget to follow us:
        </Box>
        <Box component='span'>
          <FontAwesomeIcon icon={faCode} />
        </Box>
        <Box component='span'>Twitter</Box>
      </Grid>
    </Grid>
  )
}

function Header(props) {
  const [value, setValue] = React.useState('/')
  let { history } = props

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue)
    history.push(newValue)
  }

  return (
    <Box component='header' className='App-header'>
      <ContactBar></ContactBar>
      <NavBar value={value} handleChange={handleChange}></NavBar>
    </Box>
  )
}

export default Header
