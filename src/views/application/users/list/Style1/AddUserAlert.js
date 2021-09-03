import React from 'react';

// material-ui
import { Button, Grid, Card, Divider,    TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Autocomplete } from '@material-ui/core';


import FormControl from 'ui-component/extended/Form/FormControl';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export default function AlertDialog() {
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
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New User
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ p: 3 }}
            >
                <DialogTitle id="alert-dialog-title">Create New User</DialogTitle>
                <DialogContent>
                <Card><Divider/><br/></Card>
                  <Grid container spacing={2} columns={16}>
                      <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="First Name"
                                placeholder="First Name"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Last Name"
                                placeholder="Last Name"
                            />
                         </Grid>
                         <Grid item xs={8}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={ranks}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Rank" />}
                                />
                 
                        </Grid>
                         <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="User Name"
                                placeholder="User Name"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Job Title"
                                placeholder="Job Title"
                            />
                        </Grid>
                        <Grid item xs={8}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={permissions}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Permission Level" />}
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
                                label="Email"
                                placeholder="email@dod.mil"
                            />
                        </Grid>
                        <Grid item xs={8}>
                             <FormControl iconPrimary={LockTwoToneIcon} placeholder="Password" />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Home Address"
                                placeholder="Home Address"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Phone Number"
                                placeholder="000-000-0000"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="AFSC"
                                placeholder="AFSC Code"
                            />
                        </Grid>
                    </Grid>
             
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={handleClose} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
