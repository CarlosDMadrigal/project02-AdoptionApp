import React from 'react'
import exampleImg01 from '../../img/example-01.jpg'
import exampleImg02 from '../../img/example-02.jpg'
import exampleImg03 from '../../img/example-03.jpg'
import {
  APPLICATION_NAME,
  APPLICATION_MAIL,
  APPLICATION_SUPPORT_MAIL,
  APPLICATION_PHONE,
  APPLICATION_SUPPORT_PHONE
} from '../../costants/AplicationCostants'
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar
} from '@material-ui/core'

function StartSection() {
  return (
    <Grid component='section' className='slide'>
      <Typography component='div'>
        <Box
          fontSize='h2.fontSize'
          fontWeight='fontWeightMedium'
          className='slide__title'
        >
          Thinking about adopting a new friend?
        </Box>
      </Typography>
    </Grid>
  )
}

function PetsSection() {
  return (
    <Typography component='section' className='pets'>
      <Grid
        container
        alignItems='center'
        direction='column'
        className='pets__title'
      >
        <Box fontSize='h3.fontSize' fontWeight='fontWeightMedium'>
          Our Pets
        </Box>
        <Grid container justify='center'>
          <Box component='div' className='blueline'></Box>
        </Grid>
        <Box fontSize='h6.fontSize'>
          We have wonderful cats and dogs ready for adoption.
        </Box>
        <Box fontSize='h6.fontSize'>Find you perfect match today!</Box>
      </Grid>
      <Grid container justify='space-between' className='pets__cards'>
        <Card className='card'>
          <CardMedia
            className='card__figure'
            image={exampleImg02}
            title='white cat picture'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Kuni
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              She's one of the babies my cat had half a year ago but i can't
              keep her.
            </Typography>
          </CardContent>
        </Card>
        <Card className='card'>
          <CardMedia
            className='card__figure'
            image={exampleImg01}
            title='Golden Retriever puppy picture'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Scott
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              We found scott in the trash with a couple of toilet paper rolls.
            </Typography>
          </CardContent>
        </Card>
        <Card className='card'>
          <CardMedia
            className='card__figure'
            image={exampleImg03}
            title='dog with a stick picture'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Robert
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Robert is a very energetic boy and i don't have enough space to
              let him play.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Typography>
  )
}

function TeamSection() {
  return (
    <Typography component='section' className='team'>
      <Grid
        container
        alignItems='center'
        direction='column'
        className='team__title'
      >
        <Box fontSize='h3.fontSize' fontWeight='fontWeightMedium'>
          Meet Our team
        </Box>
        <Grid container justify='center'>
          <Box component='div' className='blueline'></Box>
        </Grid>
        <Box fontSize='h6.fontSize'>
          Meet the profesionals that help {APPLICATION_NAME} to keep a good
          servide.
        </Box>
      </Grid>
      <Grid container alignItems='center' className='team__pictures'>
        <Grid
          container
          alignItems='center'
          direction='column'
          className='team-pictures'
        >
          <Avatar
            alt='Lizzie Rolly'
            src='https://images.unsplash.com/photo-1552699498-ec96cf4765ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=715&q=80'
            className='team-pictures__member-figure'
          />
          <Box
            component='span'
            className='pictures__member-name'
            fontSize='h5.fontSize'
            fontWeight='fontWeightMedium'
          >
            Lizzie Rolly
          </Box>
          <Box component='span' className='pictures__member-ocupation'>
            Veterinarian
          </Box>
        </Grid>
      </Grid>
    </Typography>
  )
}

function InformationSection() {
  return (
    <Typography component='section'>
      <Grid
        container
        alignItems='flex-end'
        justify='center'
        className='information'
      >
        <Grid className='card' boxShadow={3} container>
          <Grid
            container
            justify='center'
            direction={{
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row'
            }}
          >
            <Grid
              component='div'
              className='card__col card__col-address'
              container
              direction='column'
              alignItems='center'
            >
              <Box
                component='p'
                fontSize='h6.fontSize'
                fontWeight='fontWeightMedium'
              >
                Our Address
              </Box>
              <Box component='span'>Tres Rios, Cartago Province</Box>
              <Box component='span'>Terra Campus Corporativo</Box>
            </Grid>
            <Grid
              component='div'
              className='card__col card__col-contact'
              container
              direction='column'
              alignItems='center'
            >
              <Box
                component='p'
                fontSize='h6.fontSize'
                fontWeight='fontWeightMedium'
              >
                Contact Info
              </Box>
              <Box component='span'>Phone:{` ${APPLICATION_PHONE}`}</Box>
              <Box component='span'>E-mail:{` ${APPLICATION_MAIL}`}</Box>
            </Grid>
            <Grid
              component='div'
              className='card__col card__col-support'
              container
              direction='column'
              alignItems='center'
            >
              <Box
                component='p'
                fontSize='h6.fontSize'
                fontWeight='fontWeightMedium'
              >
                Our Support
              </Box>
              <Box component='span'>
                Phone:{` ${APPLICATION_SUPPORT_PHONE}`}
              </Box>
              <Box component='span'>
                E-mail:{` ${APPLICATION_SUPPORT_MAIL}`}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  )
}
function HomePage() {
  return (
    <Grid component='div' className='home'>
      <StartSection></StartSection>
      <PetsSection></PetsSection>
      <TeamSection></TeamSection>
      <InformationSection></InformationSection>
    </Grid>
  )
}
export default HomePage
