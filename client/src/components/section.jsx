import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Card, Container, Grid } from '@material-ui/core'
import Person from './person';

export default function Section(props) {
    const section_name = props.section_name
    const location = props.location
    return (
    
       <Card>
         <h3>{section_name}</h3>
         <h4>Open / Close me</h4>
         <p>{location}</p>

         <List>
          <Person name='Jordan'/> 
          <Person name='Jacob'/>
          <Person name='Michelle'/> 
          <Person name='Oleg'/>
          <Person name='Nicholas'/>
         </List>
        </Card>
    );
  }