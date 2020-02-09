import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIos'

function PetDetailPage(props) {
  let pet =
    'dsfdsbnafkjasndlfsdajl fnldsfdsbnafkjasndlfsdaj lfnlkdsanflna sdlkfnlsadnlfns ldaknfkndslkanklsadnflnasdklkdsanflnasdlkfnlsadnlf nsldaknfkndslkanklsadnflnasdkl'
  return (
    <Grid component='section' className='detail' container direction='row'>
      <Box component='div' className='detail__picture'>
        <img
          src='https://adoption-app-bucket.s3.amazonaws.com/example-01.jpg'
          alt=''
        />
      </Box>
      <Typography component='div' className='pet'>
        <Grid className='pet__name' container direction='column'>
          <Box
            component='span'
            fontSize='h3.fontSize'
            fontWeight='fontWeight.Bold'
          >
            <ArrowBack fontSize='large' />
            Pet Name
          </Box>
        </Grid>
        <Typography component='div' className='information'>
          <Grid className='information__genre' container direction='column'>
            <Box component='span'>PetGender</Box>
          </Grid>
          <Grid className='information__detail' container direction='column'>
            <Typography item className='information__detail-text'>
              {pet}
            </Typography>
          </Grid>
        </Typography>
      </Typography>
    </Grid>
  )
}

export default PetDetailPage
