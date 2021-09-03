/* eslint-disable */

import React from 'react';

// material-ui
import { Button, Card, Grid, TextField, Dialog, Divider, DialogActions, DialogContent, DialogTitle, Typography, Autocomplete } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';

// Extensions
import FormControl from 'ui-component/extended/Form/FormControl';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export default function AlertDialog({user}) {
    const [open, setOpen] = React.useState(false);

    const [userFirstName, setUserFirstName] = React.useState('');
    const [userLastName, setUserLastName] = React.useState('');
    const [userRank, setUserRank] = React.useState('');
    const [userName, setUserUserName] = React.useState('');
    const [userJobTitle, setUserJobTitle] = React.useState('');
    const [userPermissions, setUserPermissions] = React.useState('');
    const [userOrganization, setUserOrganization] = React.useState('');
    const [userSection, setUserSection] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userHomeAddress, setUserHomeAddress] = React.useState('');
    const [userCellPhone, setUserCellPhone] = React.useState('');
    const [userAfsc, setUserAfsc] = React.useState('');
    
    const [updatedUser, setUpdatedUser] = React.useState({});

    const handleUpdatedUser = () => {
        setUpdatedUser={
            first_name: userfirstName,
            last_name: userlastName,
            rank: userrank, 
            email: useremail, 
            username: useruserName, 
            permission_level: userpermiisions,
            organization_id: userorganization,
            section_id: usersection,
            home_address: userhomeAddress,
            afsc: userafsc,
            job_title: userjobTitle,
            cell_phone: usercellPhone
        }

    }


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

    

    // Permissions list
    const organizationlist =
    [
    { title: 'Bro Club'},
    { title: 'TALIBAN CLUB'}
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
            <EditIcon onClick={handleClickOpen} sx={{ fontSize: '1.1rem' }} />
            
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ p: 3 }}
            >
                <DialogTitle id="alert-dialog-title">{`Details for ${user.rank} ${user.first_name} ${user.last_name}`}</DialogTitle>
                <DialogContent>
                    <Card><Divider/><br/></Card>
                  <Grid container spacing={2} columns={16}>
                      <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="First Name"
                                defaultValue={user.first_name}
                                onChange={(event) => {setUserFirstName(event.target.value)
                                console.log(userFirstName)}}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Last Name"
                                defaultValue={user.last_name}
                                onChange={(event) => {setUserLastName(event.target.value)
                                    console.log(userLastName)}}
                            />
                         </Grid>
                         <Grid item xs={8}>
                         <TextField fullWidth 
                                id="outlined-basic" 
                                label="Rank"
                                defaultValue={user.rank}
                            />
                        </Grid>
                         <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Username"
                                defaultValue={user.username}
                                onChange={(event) => {setUserUserName(event.target.value)
                                    console.log(userFirstName)}}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Job Title"
                                defaultValue={user.job_title}
                                onChange={(event) => {setUserJobTitle(event.target.value)
                                    console.log(userJobTitle)}}
                            />
                        </Grid>
                        <Grid item xs={8}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={permissions}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Permission level" />}
                                />
                        </Grid>
                        <Grid item xs={8}>
                        <Autocomplete
                                    id="combo-box-demo"
                                    options={organizationlist}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Organization" />}
                                />
                        </Grid>
                        <Grid item xs={8}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={sections}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Section" />}
                                />
                        </Grid>
                        <Grid item xs={16}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Home Address"
                                defaultValue={user.home_address}
                                onChange={(event) => {setUserHomeAddress(event.target.value)
                                    console.log(userfirstName)}}
                            />
                        </Grid>
                        <Grid item xs={16}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Email"
                                defaultValue={user.email}
                                onChange={(event) => {setUserEmail(event.target.value)
                                    console.log(userfirstName)}}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Phone Number"
                                defaultValue={user.cell_phone}
                                onChange={(event) => {setUserCellPhone(event.target.value)
                                    console.log(userfirstName)}}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="AFSC"
                                defaultValue={user.afsc}
                                onChange={(event) => {setUserAfsc(event.target.value)
                                    console.log(userfirstName)}}
                                                                   
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={handleClose} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
