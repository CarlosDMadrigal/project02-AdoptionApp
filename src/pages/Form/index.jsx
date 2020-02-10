import React from 'react'
import Form from '../../components/Form'
import { Typography, Grid, Paper, Box, FormLabel } from '@material-ui/core'
import { usePetById } from '../../hooks/usePets'
import emailjs from 'emailjs-com'

function FormPage({ match, history }) {
 let { pet } = usePetById(match.params.id)
 let [values, setValues] = React.useState({
  name: '',
  mail: '',
  phone: '',
  address1: '',
  address2: '',
  reason: '',
  ownPet: 'no',
  image: false,
 })

 const handleChange = (event, prop) => {
  setValues({ ...values, [prop]: event.target.value })
 }
 const handleUploadChange = event => {
  setValues({ ...values, image: true })
 }

 const handleClickSubmit = () => {
  const templateId = 'template_cMX4fzfN'
  var template_params = {
   send_to: pet.mail,
   pet_name: pet.name,
   pet_image: pet.picture,
   form_name: values.name,
   form_mail: values.mail,
   form_phone: values.phone,
   form_address1: values.address1,
   form_address2: values.address2,
   form_reason: values.reason,
   form_own_pets: values.ownPet,
  }

  sendFeedback(templateId, template_params)
 }

 function sendFeedback(templateId, variables) {
  emailjs
   .send('default_service', templateId, variables, 'user_aNHo8I6XtgFFl1EiPH1oc')
   .then(res => {
    console.log('Email successfully sent!')
    history.push('/home')
   })
   // Handle errors here however you like, or use a React error boundary
   .catch(err =>
    console.error(
     'Oh well, you failed. Here some thoughts on the error that occured:',
     err
    )
   )
 }
 return (
  <Grid container component="section" className="adoption">
   <Paper square elevation={3} className="form">
    <Typography component="section" className="form__title">
     <Box component="span" container fontSize="h4.fontSize">
      Required Information
     </Box>
     <Grid component="div" container className="form__warning">
      <FormLabel component="legend" className="form__upload-legend">
       This information will be shared with the pet's owner.
      </FormLabel>
     </Grid>
    </Typography>
    <Form
     values={values}
     handleChange={handleChange}
     handleUploadChange={handleUploadChange}
     handleClickSubmit={handleClickSubmit}
    ></Form>
   </Paper>
  </Grid>
 )
}
export default FormPage
