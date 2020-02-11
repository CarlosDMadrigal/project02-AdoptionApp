import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

function PetCard({ content, styles, handleCardClick }) {
 return (
  <Card className={styles.card} onClick={() => handleCardClick(content.id)}>
   <CardMedia
    className={styles.picture}
    image={content.picture}
    title={`${content.name} picture`}
   />
   <CardContent overflow="hidden">
    <Typography
     gutterBottom
     variant="h5"
     component="h2"
     className={styles.title}
    >
     {content.name}
    </Typography>
    <Typography
     variant="body2"
     component="p"
     className={styles.info}
     overflow="hidden"
    >
     {content.info}
    </Typography>
   </CardContent>
  </Card>
 )
}

export default PetCard
