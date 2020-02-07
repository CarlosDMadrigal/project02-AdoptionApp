import React from 'react'
import { Grid } from '@material-ui/core'
import CardList from '../../components/CardList'
import SearchBar from '../../components/SearchBar'

function DogsListPage(props) {
 const [values, setValues] = React.useState({
  password: '',
  page: 0,
  pages: 0,
  quantity: 0,
 })
 const dogsList = [
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'Scary Terry',
   info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
  {
   picture:
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
   name: 'pet',
   info: `he's a pet`,
  },
 ]
 const handleClick = event => {
  setValues({ ...values, quantity: dogsList.length })
  console.log(values.password)
 }

 const handleChange = prop => event => {
  setValues({ ...values, [prop]: event.target.value })
 }
 return (
  <Grid component="section" container justify="center" className="dogs">
   <SearchBar
    handleClick={handleClick}
    handleChange={handleChange}
    values={values}
   ></SearchBar>
   <CardList data={dogsList}></CardList>
  </Grid>
 )
}

export default DogsListPage
