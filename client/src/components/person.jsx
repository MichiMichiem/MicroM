import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Person(props) {
  const name = props.name
    return (
       <ListItem>
          {name}
       </ListItem>
    );
  }