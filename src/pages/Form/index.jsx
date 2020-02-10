import React from 'react'
import {
  Grid,
  Box,
  Paper,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  FormHelperText
} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

function FormPage(props) {
  return (
    <Grid container component='section' className='adoption'>
      <Paper square elevation={3} className='form'>
        <TextField
          id='outlined-full-width'
          label='Name'
          style={{ margin: 8 }}
          placeholder='Name'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          variant='outlined'
        />
        <TextField
          id='outlined-full-width'
          label='Mail'
          style={{ margin: 8 }}
          placeholder='Mail'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          variant='outlined'
        />
        <TextField
          id='outlined-full-width'
          label='Phone Number'
          style={{ margin: 8 }}
          placeholder='Phone Number'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          variant='outlined'
        />
        <TextField
          id='outlined-full-width'
          label='Address 1'
          style={{ margin: 8 }}
          placeholder='Address 1'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          variant='outlined'
        />
        <TextField
          id='outlined-full-width'
          label='Address 2'
          style={{ margin: 8 }}
          placeholder='Address 2'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          variant='outlined'
        />
        <TextField
          id='outlined-multiline-static'
          label='Adoption Reason'
          style={{ margin: 8 }}
          placeholder='Adoption Reason'
          helperText={`Detail the reason you want to adopt this pet, this may help the owner to choose this pet's new partner*`}
          multiline
          fullWidth
          rowsMax='4'
          rows='4'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          variant='outlined'
        />
        <FormControl
          component='fieldset'
          className=''
          fullWidth
          style={{ margin: 8 }}
        >
          <FormLabel component='legend'>
            Have you or do you currently own any pets?
          </FormLabel>
          <RadioGroup name='ownPets' value={`no`}>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
        <FormLabel component='legend'>
          Please Upload a picture of the room the pet will be using.
        </FormLabel>
        <Button
          variant='contained'
          color='default'
          className=''
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='large'
          disableElevation
          className='form__button'
        >
          Submit
        </Button>
      </Paper>
    </Grid>
  )
}
export default FormPage
