import React from 'react'
import { APLICATION_NAME } from '../../costants/AplicationCostants'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Tabs, Tab, Box, Grid } from '@material-ui/core'
import { LocationOn, Phone } from '@material-ui/icons'

function a11yProps(index) {
 return {
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 }
}

function NavBar({ value, handleChange }) {
 return (
  <Box component="div" className="navbar">
   <AppBar position="static" className="headers">
    <Toolbar className="header">
     <Typography variant="h6" className="header__name">
      {APLICATION_NAME}
     </Typography>
     <Tabs
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
      className="header__tabs"
     >
      <Tab
       className="header__tab"
       fontSize="small"
       label="Home"
       {...a11yProps(0)}
      />
      <Tab
       className="header__tab"
       fontSize="small"
       label="Dogs"
       {...a11yProps(1)}
      />
      <Tab
       className="header__tab"
       fontSize="small"
       label="Cats"
       {...a11yProps(2)}
      />
      <Tab
       className="header__tab"
       fontSize="small"
       label="Contact"
       {...a11yProps(3)}
      />
     </Tabs>
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
  >
   <Box component="div" className="contact__left">
    <Box component="span" className="contact__right-text">
     <LocationOn />
     Address
    </Box>
    <Box component="span" className="contact__right-text">
     Application Mail
    </Box>
    <Box component="span" className="contact__right-text">
     <Phone />
     +506 8573-9587
    </Box>
   </Box>
   <Box component="div" className="contact__right">
    <Box component="span" className="contact__right-text">
     Don't forget to follow us:
    </Box>
    <Box component="span">Instagram</Box>
    <Box component="span">Twitter</Box>
   </Box>
  </Grid>
 )
}

function Header({ history }) {
 const [value, setValue] = React.useState(0)

 const handleChange = (event, newValue) => {
  setValue(newValue)
  console.log(newValue)
  history.push(newValue)
 }

 return (
  <Box component="header" className="App-header">
   <ContactBar></ContactBar>
   <NavBar value={value} handleChange={handleChange}></NavBar>
  </Box>
 )
}

export default Header
