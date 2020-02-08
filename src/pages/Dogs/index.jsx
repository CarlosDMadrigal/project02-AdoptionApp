import React from 'react'
import { Grid } from '@material-ui/core'
import CardList from '../../components/CardList'
import SearchBar from '../../components/SearchBar'

function DogsListPage(props) {
  const [values, setValues] = React.useState({
    list: [
      {
        id: 0,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'Scary Terry',
        info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
      },
      {
        id: 1,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 2,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 3,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 4,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 5,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 6,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 7,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 8,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 9,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 10,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 11,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 12,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 13,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 14,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 15,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 16,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 17,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 18,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 19,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 20,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 21,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 22,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 23,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 24,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 25,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 26,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      }
    ],
    filteredList: [
      {
        id: 0,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'Scary Terry',
        info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
      },
      {
        id: 1,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 2,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 3,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 4,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 5,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 6,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 7,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 8,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 9,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 10,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 11,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 12,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 13,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 14,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 15,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 16,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 17,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 18,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 19,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 20,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 21,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 22,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 23,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 24,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 25,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      },
      {
        id: 26,
        picture:
          'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        name: 'pet',
        info: `he's a pet`
      }
    ],
    searchValue: ''
  })
  let { history } = props

  const handleClick = () => {
    let newList = []
    for (let i = 0; i < values.list.length; i++) {
      if (
        values.list[i].name
          .toLowerCase()
          .includes(values.searchValue.toLowerCase())
      ) {
        newList.push(values.list[i])
        setValues({ ...values, filteredList: newList })
      }
    }
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
      <CardList
        data={values.filteredList}
        handleCardClick={handleCardClick}
      ></CardList>
    </Grid>
  )
}

export default DogsListPage
