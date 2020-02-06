import React from 'react'
import Box from '@material-ui/core/Box'
import exampleImg01 from '../../img/example-01.jpg'
import exampleImg02 from '../../img/example-02.jpg'
import exampleImg03 from '../../img/example-03.jpg'
import { APLICATION_NAME } from '../../costants/AplicationCostants'
import {
 Grid,
 Typography,
 Button,
 Card,
 CardContent,
 CardMedia,
 Avatar,
} from '@material-ui/core'

function StartSection() {
 return (
  <Grid component="section" className="slide">
   <Typography component="div">
    <Box
     fontSize="h2.fontSize"
     fontWeight="fontWeightMedium"
     className="slide__title"
    >
     Thinking about adopting a new friend?
    </Box>
    <Box fontSize="h5.fontSize" className="slide__text">
     Try lookin at the different kind of partners you can get with our help.
    </Box>
   </Typography>
   <Box className="slide__buttons">
    <Button
     variant="contained"
     color="primary"
     size="large"
     disableElevation
     className="slide__buttons-primary"
    >
     Find out how
    </Button>
    <Button
     color="primary"
     size="large"
     disableElevation
     className="slide__buttons-secondary"
     variant="outlined"
     component="span"
    >
     Want to put in adoption
    </Button>
   </Box>
  </Grid>
 )
}

function PetsSection() {
 return (
  <Typography component="section" className="pets">
   <Grid
    container
    alignItems="center"
    direction="column"
    className="pets__title"
   >
    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium">
     Our Pets
    </Box>
    <Box fontSize="h6.fontSize">
     We have wonderful cats and dogs ready for adoption.
    </Box>
    <Box fontSize="h6.fontSize">Find you perfect match today!</Box>
   </Grid>
   <Grid container justify="center" className="pets__cards">
    <Card className="card">
     <CardMedia
      className="card__figure"
      image={exampleImg02}
      title="white cat picture"
     />
     <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
       Kuni
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
       She's one of the babies my cat had half a year ago but i can't keep her.
      </Typography>
     </CardContent>
    </Card>
    <Card className="card">
     <CardMedia
      className="card__figure"
      image={exampleImg01}
      title="Golden Retriever puppy picture"
     />
     <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
       Scott
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
       We found scott in the trash with a couple of toilet paper rolls.
      </Typography>
     </CardContent>
    </Card>
    <Card className="card">
     <CardMedia
      className="card__figure"
      image={exampleImg03}
      title="dog with a stick picture"
     />
     <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
       Robert
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
       Robert is a very energetic boy and i don't have enough space to let him
       play.
      </Typography>
     </CardContent>
    </Card>
   </Grid>
  </Typography>
 )
}
function HomePage() {
 return (
  <Grid component="div" className="home">
   <StartSection></StartSection>
   <PetsSection></PetsSection>
   <Typography component="section" className="team">
    <Grid
     container
     alignItems="center"
     direction="column"
     className="team__title"
    >
     <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium">
      Meet Our team
     </Box>
     <Box fontSize="h6.fontSize">
      {APLICATION_NAME} has a team of experts that gives it support 24/7.
     </Box>
    </Grid>
    <Grid container alignItems="center" className="team__pictures">
     <Grid
      container
      alignItems="center"
      direction="column"
      className="team-pictures"
     >
      <Avatar
       alt="Carlos Madrigal"
       src=""
       className="team-pictures__member-figure"
      />
      <Box
       component="span"
       className="pictures__member-name"
       fontSize="h5.fontSize"
       fontWeight="fontWeightMedium"
      >
       Carlos Madrigal
      </Box>
      <Box component="span" className="pictures__member-ocupation">
       Application Developer
      </Box>
     </Grid>
    </Grid>
   </Typography>
  </Grid>
 )
}
export default HomePage
