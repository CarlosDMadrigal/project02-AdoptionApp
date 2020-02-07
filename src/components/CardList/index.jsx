import React from 'react'
import { Grid, Link, Button } from '@material-ui/core'
import PetCard from '../PetCard'

function CardList(props) {
 const [page, setPage] = React.useState(0)
 const [list, setList] = React.useState([])
 const cardStyles = {
  card: 'list__card',
  picture: 'list__card-figure',
  title: 'list__card-title',
  info: 'list__card-info',
 }
 let { data } = props
 const displayList = []
 let chunk = 12

 for (let i = 0; i < data.length; i += chunk) {
  displayList.push(data.slice(i, i + chunk))
 }
 console.log(list)

 const incPage = event => {
  setPage(page + 1)
  setList(displayList[page])
 }

 const decPage = event => {
  setPage(page - 1)
  setList(displayList[page])
 }

 return (
  <Grid component="section" className="list" container direction="column">
   <Grid component="div" container direction="row" justify="space-evenly">
    {displayList[page].map((content, i) => {
     return <PetCard content={content} styles={cardStyles} key={i} />
    })}
   </Grid>
   <Grid component="div" container direction="row" justify="flex-end">
    <Button variant="outlined" onClick={decPage} disabled={page === 0}>
     {`<`}
    </Button>
    <Link component="button" variant="body2" onClick={() => {}}>
     {page + 1}
    </Link>
    <Button variant="outlined" onClick={incPage}>
     {`>`}
    </Button>
   </Grid>
  </Grid>
 )
}

export default CardList
