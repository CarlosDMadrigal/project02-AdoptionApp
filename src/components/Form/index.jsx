import React from 'react'
import {
 Grid,
 TextField,
 FormControl,
 FormLabel,
 FormControlLabel,
 RadioGroup,
 Radio,
 Button,
} from '@material-ui/core'

function Form({ values, handleChange, handleUploadChange, handleClickSubmit }) {
 return (
  <Grid>
   <TextField
    id="outlined-full-width"
    label="Name"
    placeholder="Name"
    fullWidth
    value={values.name}
    margin="normal"
    onChange={event => handleChange(event, 'name')}
    InputLabelProps={{
     shrink: true,
    }}
    className="form__name"
    variant="outlined"
   />
   <TextField
    id="outlined-full-width"
    label="Mail"
    placeholder="mail@mail.com"
    fullWidth
    value={values.mail}
    margin="normal"
    onChange={event => handleChange(event, 'mail')}
    InputLabelProps={{
     shrink: true,
    }}
    className="form__mail"
    variant="outlined"
   />
   <TextField
    id="outlined-full-width"
    label="Phone Number"
    placeholder="1234-5678"
    fullWidth
    value={values.phone}
    margin="normal"
    onChange={event => handleChange(event, 'phone')}
    InputLabelProps={{
     shrink: true,
    }}
    className="form__phone"
    variant="outlined"
   />
   <TextField
    id="outlined-full-width"
    label="Address 1"
    placeholder="Address 1"
    fullWidth
    value={values.address1}
    margin="normal"
    onChange={event => handleChange(event, 'address1')}
    InputLabelProps={{
     shrink: true,
    }}
    className="form__address-1"
    variant="outlined"
   />
   <TextField
    id="outlined-full-width"
    label="Address 2"
    placeholder="Address 2"
    fullWidth
    value={values.address2}
    margin="normal"
    onChange={event => handleChange(event, 'address2')}
    InputLabelProps={{
     shrink: true,
    }}
    className="form__address-2"
    variant="outlined"
   />
   <TextField
    id="outlined-multiline-static"
    label="Adoption Reason"
    placeholder="Adoption Reason"
    helperText={`Detail the reason you want to adopt this pet. This may help the owner to choose this pet's new partner*`}
    multiline
    fullWidth
    value={values.reason}
    rowsMax="4"
    rows="4"
    margin="normal"
    onChange={event => handleChange(event, 'reason')}
    InputLabelProps={{
     shrink: true,
    }}
    className="form__reason"
    variant="outlined"
   />
   <FormControl component="fieldset" fullWidth className="form__radio">
    <FormLabel component="legend" className="form__radio-legend">
     Have you, or do you currently own any pets?
    </FormLabel>
    <RadioGroup
     name="ownPets"
     value={values.ownPet}
     className="form__radio-buttons"
     onChange={event => handleChange(event, 'ownPet')}
    >
     <FormControlLabel value="yes" control={<Radio />} label="Yes" />
     <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
   </FormControl>
   <Grid container justify="center" className="form__submit">
    <Button
     variant="contained"
     color="primary"
     size="large"
     disableElevation
     className="form__submit-button"
     disabled={
      values.name === '' ||
      values.mail === '' ||
      !values.mail.includes('@') ||
      !values.mail.includes('.') ||
      values.phone === '' ||
      values.address1 === '' ||
      values.address2 === '' ||
      values.reason === ''
     }
     onClick={handleClickSubmit}
    >
     Submit
    </Button>
   </Grid>
  </Grid>
 )
}

export default Form
