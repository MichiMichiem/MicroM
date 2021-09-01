import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const columns = [
  { field: 'first_name',
  headerName: 'First Name',
  type: 'string',
  minWidth: 150,
  editable: false,
  },
  { field: 'last_name',
  headerName: 'Last Name',
  type: 'string',
  minWidth: 150,
  editable: false,
  },
  { field: 'rank',
  headerName: 'Rank',
  type: 'string',
  minWidth: 150,
  editable: false,
  },
  { field: 'phone',
  headerName: 'Phone Number',
  type: 'string',
  minWidth: 150,
  editable: false,
  },
  { field: 'address',
  headerName: 'Address',
  type: 'date',
  minWidth: 150,
  editable: false,
  },
  
]

export default function NewUser(props) {
  const [rows, setRows] = React.useState(
   [{
      id: 1,
      first_name: 'Jordan',
      last_name: 'Meany',
      rank: 'Maj',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110'
    }, 
    {
      id: 2,
      first_name: 'Jacob',
      last_name: 'Sleep',
      rank: 'SSgt',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110'
    },
    {
      id: 3,
      first_name: 'Michelle',
      last_name: 'Snacks',
      rank: 'baby',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110'
    },
    {
      id: 4,
      first_name: 'Oleg',
      last_name: 'Ruskie',
      rank: 'Super Hacker',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110'
    },
    {
      id: 5,
      first_name: 'Nicholas',
      last_name: 'Rainman',
      rank: 'Bartender Supreme',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110'
    },
  ]
  )

  const style= props.style
  const profileClass = props.className


  return (
    
      <DataGrid
        style={props.style}
        className={profileClass}
        rows={rows}
        rowHeight={25}
        columns={columns}
        disableSelectionOnClick
        backgroundColor='white'
      />
    
  )
}