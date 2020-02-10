import React from 'react'
import { Grid } from '@material-ui/core'
import CardList from '../../components/CardList'
import SearchBar from '../../components/SearchBar'
import { usePetsByTypeAndName, usePets } from '../../hooks/usePets'

function DogsListPage(props) {
 const [values, setValues] = React.useState({
  searchValue: '',
 })

 usePets()
 let { pets } = usePetsByTypeAndName('dog', values.searchValue)
 let { history } = props

 const handleClick = () => {}

 const handleChange = prop => event => {
  setValues({ ...values, [prop]: event.target.value })
 }

 const handleCardClick = id => {
  history.push(`/detail/${id}`)
 }

 return (
  <Grid
   component="section"
   container
   justify="center"
   className="list-container"
  >
   <SearchBar
    listName={`dogs`}
    handleClick={handleClick}
    handleChange={handleChange}
    values={values}
   ></SearchBar>
   <CardList data={pets} handleCardClick={handleCardClick}></CardList>
  </Grid>
 )
}

export default DogsListPage
