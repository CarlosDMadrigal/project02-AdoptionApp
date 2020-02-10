import React from 'react'
import { Grid } from '@material-ui/core'
import CardList from '../../components/CardList'
import SearchBar from '../../components/SearchBar'
import { usePetsByTypeAndName, usePets } from '../../hooks/usePets'

function DogsListPage(props) {
  const [values, setValues] = React.useState({
    searchValue: ''
  })

  usePets()
  let { pets } = usePetsByTypeAndName('dog', values.searchValue)
  let { history } = props

  const handleClick = () => {
    // let newList = []
    // for (let i = 0; i < values.list.length; i++) {
    //   if (
    //     values.list[i].name
    //       .toLowerCase()
    //       .includes(values.searchValue.toLowerCase())
    //   ) {
    //     newList.push(values.list[i])
    //     setValues({ ...values, filteredList: newList })
    //   }
    // }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleCardClick = id => {
    history.push(`/detail/${id}`)
  }

  return (
    <Grid component='section' container justify='center' className='dogs'>
      <SearchBar
        handleClick={handleClick}
        handleChange={handleChange}
        values={values}
      ></SearchBar>
      <CardList data={pets} handleCardClick={handleCardClick}></CardList>
    </Grid>
  )
}

export default DogsListPage
