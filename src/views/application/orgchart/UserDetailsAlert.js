import React from 'react';

// material-ui
import { Button, Card, Grid, TextField, Dialog, Divider, DialogActions, DialogContent, DialogTitle, Typography, Autocomplete } from '@material-ui/core';

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

// Extensions
import FormControl from 'ui-component/extended/Form/FormControl';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export default function AlertDialog({user}) {
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
            {/* <PermContactCalendarIcon onClick={handleClickOpen} sx={{ fontSize: '1.1rem' }} />
             */}
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
                <DialogTitle id="alert-dialog-title">{`Details for ${user.rank} ${user.first_name} ${user.last_name}`}</DialogTitle>
                <DialogContent>
                    <Card><Divider/><br/></Card>
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
                    </Grid>
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
