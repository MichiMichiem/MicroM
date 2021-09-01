import { FormControl, 
         MenuItem, 
         TextField, 
         Select, 
         InputLabel } from '@material-ui/core';
import React from 'react';


const ranks =
[
  'N/A',
  'Civilian',
  'Airman Basic',	
  'Basic Airman',
  'Airman',
  'Airman First Class',
  'Senior Airman',
  'Staff Sergeant',
  'Technical Sergeant',	
  'Master Sergeant',
  'Senior Master Sergeant',
  'Chief Master Sergeant',
  'Command Chief Master Sergeant',
  'Second lieutenant',
  'First lieutenant',
  'Captain',
  'Major',
  'Lieutenant colonel',
  'Colonel',
  'Brigadier general',
  'Major general',
  'Lieutenant general',
  'General'
]

const pullRankSelection = (ranks) => {
   
  
}
export default function NewUser(props) {
    const [rank, setRank] = React.useState('')
    const style = props.style
    const formClass = props.className
    return (
      <div style={style} className={formClass}> 
        <FormControl color="primary">
          <TextField color='red' id='first_name' label='First Name' variant='outlined'/>
      
          <TextField id='last_name' label='Last Name' variant='outlined'/>
          
          <FormControl>
            <InputLabel id='rank_label'>Rank</InputLabel>
            <Select labelId='rank_label' id='rank' label='Rank' variant='outlined'>
              {ranks.map(rank => {return (<MenuItem value={`${rank}`}>{`${rank}`}</MenuItem>)})}
            </Select>
          </FormControl>
          <TextField id='user_name' label='User Name' variant='outlined'/>
          <TextField id='job_title' label='Job Title' variant='outlined'/>
          <TextField id='perm_lvl' label='Permission Level' variant='outlined'/>
          <FormControl>
            <InputLabel id='organization_label'>Organization</InputLabel>
            <Select labelId='organization_label' id='organization' label='Organization' variant='outlined'/>
          </FormControl>
          
          <FormControl>
            <InputLabel id='section_label'>Section</InputLabel>
            <Select labelId='section_label' id='section' label='Section' variant='outlined'/>
          </FormControl>
          
          <TextField id='email' label='Email' variant='outlined'/>
          <TextField id='password' label='Password' variant='outlined'/>
          <TextField id='home_address' label='Home Address' variant='outlined'/>
          <TextField id='phone' label='Phone #' variant='outlined'/>
          <TextField id='afsc' label='AFSC' variant='outlined'/>
        </FormControl>
      </div>
    )
}