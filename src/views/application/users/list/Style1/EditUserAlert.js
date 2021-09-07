import React, {useState, useRef, useEffect} from 'react';

// material-ui
import { Button, Stack, Alert, Grid, Card, Divider, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Autocomplete} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';



import FormControl from 'ui-component/extended/Form/FormControl';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
var API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://sdi06-10.staging.dso.mil/api'
// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export default function AlertDialog({user, organization, sectionList}) {
    const fn = useRef()
    const ln = useRef()
    const r = useRef()
    const un = useRef()
    const pl = useRef()
    const oid = useRef()
    const sid = useRef()
    const em = useRef()
    const ha = useRef()
    const cp = useRef()
    const afc = useRef()
    const jt = useRef()

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAlert = () => {
        console.log('FUCK YOU')
    };
    
    const submitForm = () => {
        console.log(sid.current)
        if (fn.current !== undefined) {
            //acquire corresponding id numbers by name.
            let sec_id;
            let tempUn = un.current.value;
            let or_id = organization[0].organization_id;
            sectionList.forEach(item => {
                if (item.name === sid.current.value) {
                    sec_id = item.section_id
                }
            })
            fetch(`${API_URL}/new/user`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({   
                    "first_name": fn.current.value,
                    "last_name": ln.current.value,
                    "rank": r.current.value,
                    "username": un.current.value,
                    "permission_level": pl.current.value,
                    "organization_id": `${or_id}`,
                    "section_id": `${sec_id}`,
                    "cell_phone": cp.current.value,
                    "home_address": ha.current.value,
                    "afsc": afc.current.value,
                    "job_title": jt.current.value,
                    "email": em.current.value
                })
            })
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    let confirmStatus = false;
                    if (Array.isArray(data)) {
                        data.forEach((item) => {
                            if (item.username === tempUn) {
                                confirmStatus = true;
                            }
                        })
                    }
                    setOpen(false);
                    if (confirmStatus === true) {
                        window.location.reload();
                        // alert("Added user successfully");
                    } else {
                         alert(handleAlert());
                        
                    }
                })
        }
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
    let organizationlist = [{title: 'Loading...'}];
    if (organization !== undefined) {
        organizationlist = [{title: organization[0].name}]
    }

    // Sections list
    let sections = [{title: "Loading..."}];
    if (Array.isArray(sectionList)) {
        sections = sectionList.map((item) => {
            return {title: item.name}
        });
    }

    // Permissions list
    const permissions =
    [
    { title: 'User'},
    { title: 'Supervisor'},
    { title: 'Admin'},
    
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
                <DialogTitle id="alert-dialog-title">Edit User</DialogTitle>
                <DialogContent>
                <Card><Divider/><br/></Card>
                  <Grid container spacing={2} columns={16}>
                      <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="First Name"
                                placeholder="First Name"
                                inputRef={fn}
                                inputValue={user.first_name}
                                required
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Last Name"
                                placeholder="Last Name"
                                inputValue={user.last_name}
                                inputRef={ln}
                                required
                            />
                         </Grid>
                         <Grid item xs={8}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={ranks}
                                getOptionLabel={(option) => option.title}
                                inputValue={user.rank}
                                renderInput={(params) => <TextField {...params} inputRef={r} label="Rank" />}
                                required
                            />
                 
                        </Grid>
                         <Grid item xs={8}>
                                <TextField fullWidth 
                                    id="outlined-basic" 
                                    label="User Name"
                                    placeholder="User Name"
                                    inputValue={user.username}
                                    inputRef={un}
                                    required
                                />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Job Title"
                                inputRef={jt}
                                inputValue={user.job_title}
                                placeholder="Job Title"
                                required
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Autocomplete
                                required
                                id="combo-box-demo"
                                options={permissions}
                                inputValue={user.permission_level}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField {...params} inputRef={pl} label="Permission Level" />}
                                
                            />
                        </Grid>
                        <Grid item xs={8}>
                             <Autocomplete
                                required
                                id="combo-box-demo"
                                inputValue={organizationlist[0].title}
                                options={organizationlist}
                                disabled
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField {...params} inputRef={oid} label="Organization" />}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Autocomplete
                                required
                                id="combo-box-demo"
                                options={sections}
                                inputValue={(sections.map(item => {
                                    if (item.section_id === user.section_id) {
                                        return item.name
                                    }
                                }))[0]}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField {...params} inputRef={sid} label="Section" />}
                                
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Email"
                                placeholder="email@dod.mil"
                                inputRef={em}
                                required
                            />
                        </Grid>
                        {/* <Grid item xs={8}>
                             <FormControl iconPrimary={LockTwoToneIcon} placeholder="Password" />
                        </Grid> */}
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Home Address"
                                inputRef={ha}
                                inputValue={user.home_address}
                                placeholder="Home Address"
                                required
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Phone Number"
                                inputRef={cp}
                                inputValue={user.cell_phone}
                                placeholder="000-000-0000"
                                required
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                inputRef={afc}
                                label="AFSC"
                                inputValue={user.afsc}
                                placeholder="AFSC Code"
                                required
                            />
                        </Grid>
                    </Grid>
             
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={submitForm} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
