import React from 'react'
import {
 APPLICATION_NAME,
 APPLICATION_MAIL,
 APPLICATION_PHONE,
 APPLICATION_ADDRESS,
} from '../../costants/AplicationCostants'
import {
 Tabs,
 Tab,
 Box,
 Grid,
 Typography,
 Toolbar,
 AppBar,
} from '@material-ui/core'
import { LocationOn, Phone, Email } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

function NavBar({ value, handleChange }) {
 return (
  <Box component="div" className="navbar">
   <AppBar position="static" className="headers">
    <Toolbar className="header">
     <Grid container justify="space-between" alignItems="center">
      <Typography variant="h6" className="header__name">
       {APPLICATION_NAME}
      </Typography>
      <Tabs
       value={value}
       onChange={handleChange}
       className="header__tabs"
       indicatorColor="primary"
      >
       <Tab className="header__tab" label="Home" value="/" />
       <Tab className="header__tab" label="Dogs" value="/dogs" />
       <Tab className="header__tab" label="Cats" value="/cats" />
       <Tab className="header__tab" label="Others" value="/others" />
      </Tabs>
     </Grid>
    </Toolbar>
   </AppBar>
  </Box>
 )
}

function ContactBar() {
 return (
  <Grid
   component="div"
   className="contact"
   container
   justify="space-between"
   alignItems="center"
   fontSize={10}
   item
   display="none"
  >
   <Grid
    component="span"
    className="contact__address"
    container
    justify="flex-start"
    item
    alignItems="center"
   >
    <LocationOn />
    {APPLICATION_ADDRESS}
   </Grid>
   <Grid
    component="span"
    container
    justify="flex-start"
    item
    alignItems="center"
    className="contact__email"
   >
    <Email />
    {APPLICATION_MAIL}
   </Grid>
   <Grid
    component="span"
    className=" contact__phone"
    container
    item
    justify="flex-start"
    alignItems="center"
   >
    <Phone />
    {APPLICATION_PHONE}
   </Grid>
  </Grid>
 )
}

function Header({ history }) {
 const [value, setValue] = React.useState(history.location.pathname)
 const handleChange = (event, newValue) => {
  setValue(newValue)
  history.push(newValue)
 }

 return (
  <Box component="header" className="App-header">
   <ContactBar></ContactBar>
   <NavBar handleChange={handleChange} value={value}></NavBar>
  </Box>
 )
}

export default withRouter(Header)
