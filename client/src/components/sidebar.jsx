import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Toolbar, Modal } from '@material-ui/core';
import NewUser from './new_user.jsx';
import InputBase from '@material-ui/core/InputBase';
import { alpha } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Person from './person.jsx'
import Profile from './profile.jsx'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  modal: {
    display: 'flex', 
    aligntItems: 'center', 
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid blue',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export default function Sidebar() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle)
  const [allUsers, setAllUsers] = React.useState([
    {
      id: 1,
      first_name: 'Jordan',
      last_name: 'Meany',
      rank: 'Maj',
      job_title: 'loser',
      permissions: 'admin',
      organization: '1',
      section: '1',
      email: 'jtackett@gmail.com',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110',
      afsc: 'K11B3AE'
    }, 
    {
      id: 2,
      first_name: 'Jacob',
      last_name: 'Wilcox',
      rank: 'SSgt',
      job_title: 'AMAZING',
      permissions: 'Supervisor',
      organization: '1',
      section: '2',
      email: 'jacob@zzzz.com',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110',
      afsc: '2A656'
    },
    {
      id: 3,
      first_name: 'Michelle',
      last_name: 'NotSoHumble',
      rank: 'POTUS',
      job_title: 'Cyber Technician',
      permissions: 'user',
      organization: '1',
      section: '2',
      email: 'michelle.chiem@gmail.com',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110',
      afsc: '3D0X3'
    }, 
    {
      id: 4,
      first_name: 'Oleg',
      last_name: 'REDACTED',
      rank: 'Supreme Leader',
      job_title: 'Chef',
      permissions: 'Supervisor',
      organization: '1',
      section: '3',
      email: 'oleg@imnotaspy.com',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110',
      afsc: '654564',
    },
    {
      id: 5,
      first_name: 'Nicholas',
      last_name: 'Rainsalot',
      rank: 'SrA',
      job_title: 'coolguy',
      permissions: 'user',
      organization: '1',
      section: '1',
      email: 'nraynes@gmail.com',
      phone: '555-555-5555',
      address: '1220 this st, Shithole LA. 71110',
      afsc: '3D151'
    }
  ]);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const openProfile = () => {
    setProfileOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const classes = useStyles();

  return (
      <Drawer
        className={classes.drawer}
        anchor='left'
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Divider/>
            <Person openProfile={openProfile} allUsers={allUsers}/>
          <Divider/>
            <Button onClick={handleOpen} 
                    variant="contained" 
                    color="primary"> 
              Add New User
            </Button>
            <Modal aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open} 
                    onClose={handleClose}>
              <NewUser style={modalStyle} className={classes.paper}/>
            </Modal>
            <Modal        aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={profileOpen} 
              onClose={handleProfileClose}>
              <Profile style={modalStyle} className={classes.paper} openProfile={openProfile} />
            </Modal>
        </div>
      </Drawer>

  )}