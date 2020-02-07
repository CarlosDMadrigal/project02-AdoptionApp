import React from 'react'
import {
 Box,
 Grid,
 FormControl,
 InputAdornment,
 InputLabel,
 OutlinedInput,
 IconButton,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

function SearchBar({ handleClick, handleChange, values }) {
 return (
  <Grid
   className="search"
   container
   justify="space-between"
   alignItems="center"
  >
   <Box fontSize="h5.fontSize" component="span">
    Here's a list of our dogs.
   </Box>
   <FormControl className="search__form" variant="outlined" fullWidth>
    <InputLabel htmlFor="input-search">Search</InputLabel>
    <OutlinedInput
     id="input-search"
     className="seach__form-input"
     value={values.password}
     onChange={handleChange('password')}
     endAdornment={
      <InputAdornment position="end">
       <IconButton onClick={handleClick} edge="end">
        <Search />
       </IconButton>
      </InputAdornment>
     }
     labelWidth={50}
    />
   </FormControl>
  </Grid>
 )
}

export default SearchBar
