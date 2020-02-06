import React from 'react'
import Box from '@material-ui/core/Box'
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core'

function HomePage() {
  return (
    <Grid component='div' className='home'>
      <Grid component='section' className='slide'>
        <Typography component='div'>
          <Box
            fontSize='h2.fontSize'
            fontWeight='fontWeightMedium'
            className='slide__title'
          >
            Thinking about adopting a new friend?
          </Box>
          <Box fontSize='h5.fontSize' className='slide__text'>
            Try lookin at the different kind of partners you can get with our
            help.
          </Box>
        </Typography>
        <Box className='slide__buttons'>
          <Button
            variant='contained'
            color='primary'
            size='large'
            disableElevation
            className='slide__buttons-primary'
          >
            Find out how
          </Button>
          <Button
            color='primary'
            size='large'
            disableElevation
            className='slide__buttons-secondary'
            variant='outlined'
            component='span'
          >
            Want to put in adoption
          </Button>
        </Box>
      </Grid>
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
          <Box fontSize='h6.fontSize'>
            We have wonderful cats and dogs ready for adoption.
          </Box>
          <Box fontSize='h6.fontSize'>Find you perfect match today!.</Box>
        </Grid>
        <Grid className='pets__cards'>
          <Card className='card'>
            <CardActionArea>
              <CardMedia
                className='algo'
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Typography>
    </Grid>
  )
}
export default HomePage
