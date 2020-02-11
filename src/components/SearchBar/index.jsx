import React from 'react'
import {
  Box,
  Grid,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

function SearchBar({ handleClick, handleChange, values, listName }) {
  return (
    <Grid
      className='search'
      container
      justify='space-between'
      alignItems='center'
    >
      <Box fontSize='h5.fontSize' component='span' item>
        {`Here's a list of our ${listName}.`}
      </Box>
      <Grid item lg={5} xs sm>
        <FormControl className='search__form' variant='outlined' fullWidth>
          <InputLabel htmlFor='input-search'>Search</InputLabel>
          <OutlinedInput
            id='input-search'
            className='seach__form-input'
            value={values.password}
            onChange={handleChange('searchValue')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleClick} edge='end'>
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={50}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SearchBar
