
import Section from './section.jsx';
import { Tree, TreeNode } from 'react-organizational-chart';
import {Modal, Button} from '@material-ui/core'
import React from 'react';
import Profile from './profile.jsx';
import { makeStyles } from '@material-ui/core/styles';
import AddSection from './addSection.jsx'
import Recall from './recall.jsx';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

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
}));

export default function Organization() {
  const classes = useStyles();
  const [addSectionOpen, setAddSectionOpen] = React.useState(false)
  const [modalStyle] = React.useState(getModalStyle)
  const openProfile = () => {
    setProfileOpen(true);
  };
  const handleProfileClose = () => {
    setProfileOpen(false);
  };
  
  const [profileOpen, setProfileOpen] = React.useState(false);
  const openAddSection = () => {
    setAddSectionOpen(true)
  }
  const closeAddSection = () => {
    setAddSectionOpen(false)
  }
  const [recallOpen, setRecallOpen] = React.useState(false)
  const openRecall = () => {
    setRecallOpen(true)
  }
  const closeRecall = () => {
    setRecallOpen(false)
  }

return (
      
<>
        <Button variant='outlined'
        color='primary' 
        onClick={openAddSection}>Add Section</Button>
        <Modal aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={addSectionOpen} 
              onClose={closeAddSection}>
          <AddSection style={modalStyle} className={classes.paper} />
        </Modal>
        <Button variant='outlined'
        color='primary' 
        onClick={openRecall}>Recall</Button>
        
        <Modal aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={recallOpen} 
              onClose={closeRecall}>
          <Recall style={modalStyle} className={classes.paper} />
        </Modal>
        
        <Tree lineWidth={'3px'} lineColor={'blue'} label={<Section openProfile={openProfile} section_name='20 AMXS' location='BAFB'/>}> 
          <TreeNode label={<Section openProfile={openProfile} section_name='Production' location='Hanger 6'/>}>
              <TreeNode label={<Section openProfile={openProfile} section_name='Crew 1' location='FL Ste 6'/>}/>
              <TreeNode label={<Section openProfile={openProfile} section_name='Crew 2' location='FL Ste 15'/>}/>
              <TreeNode label={<Section openProfile={openProfile} section_name='Crew 3' location='FL Ste 17'/>}/>
              <TreeNode label={<Section openProfile={openProfile} section_name='Crew 3' location='FL Ste 17'/>}/>
          </TreeNode>
          <TreeNode label={<Section openProfile={openProfile} openProfile={openProfile} section_name='JETS' location='Hanger 2'/>}>
              <TreeNode label={<Section openProfile={openProfile} section_name='Propulsion' location='RM 45'/>}/>
              <TreeNode label={<Section openProfile={openProfile} section_name='Fuels' location='Bay 2'/>}/>
          </TreeNode >
        </Tree>
        <Modal aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={profileOpen} 
              onClose={handleProfileClose}>
          <Profile style={modalStyle} className={classes.paper} openProfile={openProfile} />
        </Modal>
      </>
    );
  }