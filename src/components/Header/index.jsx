import React from 'react'
import { APPLICATION_NAME } from '../../costants/AplicationCostants'
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

function NavBar({ value, handleChange }) {
  return (
    <Box component='div' className='navbar'>
      <AppBar position='static' className='headers'>
        <Toolbar className='header'>
          <Grid container justify='space-between' alignItems='center'>
            <Box
              display={{
                xs: 'none',
                sm: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block'
              }}
            >
              <Typography variant='h6' className='header__name'>
                {APPLICATION_NAME}
              </Typography>
            </Box>
            <Tabs
              value={value}
              onChange={handleChange}
              className='header__tabs'
              indicatorColor='primary'
            >
              <Tab className='header__tab' label='Home' value='/' />
              <Tab className='header__tab' label='Dogs' value='/dogs' />
              <Tab className='header__tab' label='Cats' value='/cats' />
              <Tab className='header__tab' label='Others' value='/others' />
            </Tabs>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

function Header({ history }) {
  const [value, setValue] = React.useState(history.location.pathname)
  const handleChange = (event, newValue) => {
    setValue(newValue)
    history.push(newValue)
  }

  return (
    <Box component='header' className='App-header'>
      <NavBar handleChange={handleChange} value={value}></NavBar>
    </Box>
  )
}

export default withRouter(Header)
