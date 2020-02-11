import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIos'
import { usePetById } from '../../hooks/usePets'
import PetsIcon from '@material-ui/icons/Pets'

function PetDetailPage({ match, history }) {
 let { pet } = usePetById(match.params.id)
 const handleClick = id => {
  history.push(`/form/${id}`)
 }

 return (
  <Box className="pet-details">
   <Grid
    component="section"
    className="detail"
    container
    direction={{
     xs: 'column',
     sm: 'row',
     md: 'row',
     lg: 'row',
     xl: 'row',
    }}
   >
    <Grid
     container
     item
     lg={6}
     justify="center"
     component="div"
     className="detail__picture"
    >
     <img src={pet.picture} alt={`${pet.name}`} />
    </Grid>
    <Grid
     component="div"
     className="pet"
     container
     item
     lg={6}
     justify="space-between"
    >
     <Grid className="pet__name" container direction="column">
      <Box component="span" fontSize="h3.fontSize" fontWeight="fontWeight.Bold">
       <ArrowBack fontSize="large" />
       {pet.name}
      </Box>
     </Grid>
     <Grid
      component="div"
      className="information"
      container
      justify="space-between"
      direction="column"
     >
      <Box component="span" className="information__genre">
       <PetsIcon
        className={
         pet.gender === 'Female'
          ? 'information__genre-icon pink'
          : 'information__genre-icon blue'
        }
       />{' '}
       {pet.gender}
      </Box>
      <Typography className="information__detail">{pet.info}</Typography>
      <Button
       variant="contained"
       color="primary"
       size="large"
       disableElevation
       className="detail__button"
       onClick={() => handleClick(pet.id)}
      >
       Apply for Adoption
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </Box>
 )
}

export default PetDetailPage
