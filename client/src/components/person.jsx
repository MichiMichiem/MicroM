import React from 'react';
import  {ListItem} from '@material-ui/core';

export default function Person(props) {
const allUsers = props.allUsers
const openProfile = props.openProfile
console.log('All users:', allUsers)
  return (
    <>
      {allUsers.map((user) => {
        console.log('User:', user)
        return (
          <ListItem onClick={openProfile} id={user.id}> {`${user.rank} ${user.first_name} ${user.last_name}`} </ListItem>
        )
      })
      }
    </>
  )
}
