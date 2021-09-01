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
  const [row, setRow] = React.useState(
   [{
      id: 1,
      first_name: 'Joe',
      last_name: 'Schmo',
      rank: 'Capt',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110'
    }]
  )

  const style= props.style
  const profileClass = props.className


  return (
    
      <DataGrid
        style={props.style}
        className={profileClass}
        rows={row}
        rowHeight={25}
        columns={columns}
        disableSelectionOnClick
        backgroundColor='white'
      />
    
  )
}