import React from 'react'
import {
  APPLICATION_NAME,
  APPLICATION_MAIL,
  APPLICATION_PHONE,
  APPLICATION_ADDRESS
} from '../../costants/AplicationCostants'
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Typography,
  Toolbar,
  AppBar
} from '@material-ui/core'
import { LocationOn, Phone, Email } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

function NavBar({ history, handleChange }) {
  return (
    <Box component='div' className='navbar'>
      <AppBar position='static' className='headers'>
        <Toolbar className='header'>
          <Typography variant='h6' className='header__name'>
            {APPLICATION_NAME}
          </Typography>
          <Tabs
            value={history.location.pathname}
            onChange={handleChange}
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
      justify='flex-start'
      alignItems='center'
      fontSize={10}
    >
      <Grid
        component='div'
        className='contact__left'
        container
        justify='flex-start'
        item
        xs={9}
        alignItems='center'
      >
        <Grid
          component='span'
          className='contact__left-address'
          container
          justify='flex-start'
          item
          lg={3}
          alignItems='center'
        >
          <LocationOn />
          {APPLICATION_ADDRESS}
        </Grid>
        <Grid
          component='span'
          container
          justify='flex-start'
          item
          lg={3}
          alignItems='center'
          className='contact__left-email'
        >
          <Email />
          {APPLICATION_MAIL}
        </Grid>
        <Grid
          component='span'
          className='contact__left-phone'
          container
          justify='flex-start'
          item
          lg={2}
          alignItems='center'
        >
          <Phone />
          {APPLICATION_PHONE}
        </Grid>
      </Grid>
    </Grid>
  )
}

function Header(props) {
  let { history } = props

  const handleChange = value => {
    debugger
    history.push(value)
  }

  return (
    <Box component='header' className='App-header'>
      <ContactBar></ContactBar>
      <NavBar handleChange={handleChange} history={history}></NavBar>
    </Box>
  )
}

export default withRouter(Header)
