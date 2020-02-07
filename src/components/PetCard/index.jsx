import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

function PetCard({ content, styles }) {
 return (
  <Card className={styles.card}>
   <CardMedia
    className={styles.picture}
    image={content.picture}
    title={`${content.name} picture`}
   />
   <CardContent>
    <Typography
     gutterBottom
     variant="h5"
     component="h2"
     className={styles.title}
    >
     {content.name}
    </Typography>
    <Typography variant="body2" component="p" className={styles.info}>
     {content.info}
    </Typography>
   </CardContent>
  </Card>
 )
}

export default PetCard
