import React from 'react'
import {
 APPLICATION_NAME,
 APPLICATION_MAIL,
 APPLICATION_PHONE,
 APPLICATION_ADDRESS,
} from '../../costants/AplicationCostants'
import { Grid, Box } from '@material-ui/core'

function Footer() {
 return (
  <Grid
   component="footer"
   className="footer"
   container
   direction="row"
   justify="flex-start"
   alignItems="center"
  >
   <Box
    component="div"
    className="footer__info footer__info-name"
    fontSize="h5.fontSize"
    fontWeight="fontWeightMedium"
   >
    {APPLICATION_NAME}
   </Box>
   <Box component="div" className="footer__info footer__info-address">
    {APPLICATION_ADDRESS}
   </Box>
   <Grid
    component="div"
    className="footer__contact"
    container
    item
    justify="flex-start"
    alignItems="center"
    direction="column"
    lg={2}
   >
    <Box component="span" className="footer__contact-email">
     {APPLICATION_MAIL}
    </Box>
    <Box component="span" className="footer__contact-phone">
     {APPLICATION_PHONE}
    </Box>
   </Grid>
  </Grid>
 )
}

export default Footer
