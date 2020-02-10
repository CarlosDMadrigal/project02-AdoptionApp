import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIos'
import { usePetById } from '../../hooks/usePets'

function PetDetailPage({ match, history }) {
  let { pet } = usePetById(match.params.id)
  const handleClick = id => {
    history.push(`/form/${id}`)
  }

  return (
    <Grid component='section' className='detail' container direction='row'>
      <Grid item justify='center' component='div' className='detail__picture'>
        <img src={pet.picture} alt={`${pet.name}`} />
      </Grid>
      <Grid component='div' className='pet' container justify='space-between'>
        <Grid className='pet__name' container direction='column'>
          <Box
            component='span'
            fontSize='h3.fontSize'
            fontWeight='fontWeight.Bold'
          >
            <ArrowBack fontSize='large' />
            {pet.name}
          </Box>
        </Grid>
        <Grid
          component='div'
          className='information'
          container
          direction='column'
          justify='space-between'
        >
          <Box component='span' className='information__genre'>
            {pet.gender}
          </Box>
          <Typography className='information__detail'>{pet.info}</Typography>
          <Button
            variant='contained'
            color='primary'
            size='large'
            disableElevation
            className='detail__button'
            onClick={() => handleClick(pet.id)}
          >
            Apply for Adoption
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PetDetailPage
