import { FormControl, 
  
  TextField, 
  
  Button } from '@material-ui/core';
import React from 'react';


export default function AddSection(props) {

const style = props.style
const formClass = props.className
return (
<div style={style} className={formClass}> 
 <FormControl color="primary">
   <TextField color='red' id='section_name' label='Section Name' variant='outlined'/>

   <TextField id='location' label='Location' variant='outlined'/>
   <Button variant='outlined' color='primary'> Add me :)</Button>
 </FormControl>
</div>
)
}