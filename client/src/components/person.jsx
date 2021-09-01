import React from 'react';
import  {ListItem} from '@material-ui/core';

export default function Person(props) {
const allUsers = props.allUsers
const openProfile = props.openProfile

console.log('This is all users:', allUsers)

const result = allUsers.map(user => {
  let id = user.id
  let firstName = user.first_name
  let lastName = user.last_name
  let rank = user.rank
  let jobTitle = user.job_title
  return (<ListItem onClick={openProfile} id={id}> {`${rank} ${firstName} ${lastName} ${jobTitle}`} </ListItem>)

  })
  console.log('This is result', result)
  return (
    //Almost finished
    <div>hello world</div>
  );
}
