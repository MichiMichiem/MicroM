import React from 'react';

// material-ui
import { Button, Card, Grid, Menu, MenuItem,  TextField, Dialog, Divider, DialogActions, DialogContent, DialogTitle, Typography, Autocomplete } from '@material-ui/core';

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

// Extensions
import UserDetailsCard from 'ui-component/cards/UserDetailsCard';
import FormControl from 'ui-component/extended/Form/FormControl';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';


import PropTypes from 'prop-types';

// material-ui
import { makeStyles } from '@material-ui/styles';

// project card
import { gridSpacing } from 'store/constant';


// assets
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import NotInterestedTwoToneIcon from '@material-ui/icons/NotInterestedTwoTone';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';



const avatarImage = require.context('assets/images/profile', true);


// style card
const useStyles = makeStyles((theme) => ({
    followerBlock: {
        padding: '16px',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: theme.palette.mode === 'dark' ? '1px solid transparent' : `1px solid ${theme.palette.grey[100]}`,
        '&:hover': {
            borderColor: theme.palette.primary.main
        }
    },
    primaryLight: {
        color: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[500],
        cursor: 'pointer'
    },
    btnProfile: {
        width: '100%',
        '&:hover ': {
            color: '#fff'
        },
        '&.MuiButton-outlinedPrimary:hover ': {
            background: theme.palette.primary.main
        },
        '&.MuiButton-outlinedSecondary': {
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main
        },
        '&.MuiButton-outlinedSecondary:hover ': {
            background: theme.palette.error.main,
            color: '#fff'
        }
    }
}));


// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export default function AlertDialog({user}) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleTap = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleHide = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Rank list
    const ranks =
    [
    { title: 'N/A'},
    { title: 'Civilian'},
    { title: 'Airman Basic'},	
    { title: 'Basic Airman'},
    { title: 'Airman'},
    { title: 'Airman First Class'},
    { title: 'Senior Airman'},
    { title: 'Staff Sergeant'},
    { title: 'Technical Sergeant'},	
    { title: 'Master Sergeant'},
    { title: 'Senior Master Sergeant'},
    { title: 'Chief Master Sergeant'},
    { title: 'Command Chief Master Sergeant'},
    { title: 'Second lieutenant'},
    { title: 'First lieutenant'},
    { title: 'Captain'},
    { title: 'Major'},
    { title: 'Lieutenant colonel'},
    { title: 'Colonel'},
    { title: 'Brigadier general'},
    { title: 'Major general'},
    { title: 'Lieutenant general'},
    { title: 'General'}
    ]

    // Sections list
    const sections =
    [
    { title: '341 FSS'},
    { title: '90 CS'},
    { title: 'Jordans Flight'}
    ]

    // Permissions list
    const permissions =
    [
    { title: 'Looser'},
    { title: 'Almost not a looser'},
    { title: 'Not a looser'},
    { title: 'Ultimate'},
    { title: 'Im FUCKING GOD'}
    ]

    return (
        <>
            <Grid onClick={handleClickOpen} item xs={12}>
                    
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs zeroMinWidth>
                            <Typography align="center" component="div" variant="subtitle1">
                                 {`${user.rank} ${user.first_name} ${user.last_name}`}
                            </Typography>
                            <Typography align="center" component="div" variant="subtitle2">
                                {`${user.job_title}`}
                            </Typography>
                        </Grid>
                    </Grid>
                   
            </Grid> 
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ p: 3 }}
            >
                {/* <DialogTitle id="alert-dialog-title">{`Details for ${user.rank} ${user.first_name} ${user.last_name}`}</DialogTitle> */}
                <DialogContent>



                <Card className={classes.followerBlock}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs zeroMinWidth>
                            <Typography variant="h3" component="div">
                                {user.rank} {user.first_name} {user.last_name}
                            </Typography>
                        </Grid>
                        <Grid item>
                              <Typography variant="caption">ID: {user.user_id} / Username: {user.username} |</Typography>
                        </Grid>
                        {/* <Grid item>
                            <MoreHorizOutlinedIcon
                                fontSize="small"
                                className={classes.primaryLight}
                                aria-controls="menu-user-details-card"
                                aria-haspopup="true"
                                onClick={handleTap}
                            />
                            <Menu
                                id="menu-user-details-card"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleHide}
                                variant="selectedMenu"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                            >
                                <MenuItem onClick={handleHide}>Edit</MenuItem>
                                <MenuItem onClick={handleHide}>Delete</MenuItem>
                            </Menu>
                        </Grid> */}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={6}>
                            <Typography variant="caption">Organization</Typography>
                            <Typography variant="h4">{user.organization_id}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">Section</Typography>
                            <Typography variant="h4">{user.organization_id}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={6}>
                            <Typography variant="caption">AFSC</Typography>
                            <Typography variant="h4">{user.afsc}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">Job Title</Typography>
                            <Typography variant="h4">{user.job_title}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={6}>
                            <Typography variant="caption">Email</Typography>
                            <Typography variant="h4">{user.email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">Cell Phone</Typography>
                            <Typography variant="h4">{user.cell_phone}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">Home Address</Typography>
                    <Typography variant="h4">{user.home_address}</Typography>
                </Grid>
                {/* <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Button variant="outlined" className={classes.btnProfile} startIcon={<ChatBubbleTwoToneIcon />}>
                                Edit
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                className={classes.btnProfile}
                                startIcon={<NotInterestedTwoToneIcon />}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Grid>
        </Card>










                    {/* <Card><Divider/><br/></Card>
                  <Grid container spacing={2} columns={16}>
                      <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="First Name"
                                value={user.first_name}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Last Name"
                                value={user.last_name}
                                disabled
                            />
                         </Grid>
                         <Grid item xs={8}>
                         <TextField fullWidth 
                                id="outlined-basic" 
                                label="Rank"
                                value={user.rank}
                                disabled
                            />
                        </Grid>
                         <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Username"
                                value={user.username}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Job Title"
                                value={user.job_title}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                             <TextField fullWidth 
                                id="outlined-basic" 
                                label="Permissions"
                                value={user.permission_level}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Organization"
                                value={user.organization_id}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Section"
                                value={user.section_id}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={16}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Home Address"
                                value={user.home_address}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={16}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Email"
                                value={user.email}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Phone Number"
                                value={user.cell_phone}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="AFSC"
                                value={user.afsc}
                                disabled
                            />
                        </Grid>
                    </Grid> */}
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
