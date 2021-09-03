import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Button, Autocomplete, TextField, CardContent, CardActions, Divider, Grid, IconButton, Modal, Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import FormControl from 'ui-component/extended/Form/FormControl';
import FormControlSelect from 'ui-component/extended/Form/FormControlSelect';
import SubCard from 'ui-component/cards/SubCard';


// assets
import CloseIcon from '@material-ui/icons/Close';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Visibility from '@material-ui/icons/Visibility';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';


// generate random
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

// modal position
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

// style constant
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 450,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.down('sm')]: {
            width: 280
        }
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

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

// modal content
const Body = React.forwardRef(({ modalStyle, classes, handleClose }, ref) => (
    <div ref={ref} tabIndex={-1}>
        <MainCard
            style={modalStyle}
            className={classes.paper}
            title="Title"
            content={false}
            secondary={
                <IconButton onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        >
            <CardContent>
                      <Grid container spacing={2} columns={16}>
                      <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="First Name"
                                placeholder="First Name"
                                value="Jacob Jordan"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField fullWidth 
                                id="outlined-basic" 
                                label="Last Name"
                                placeholder="Last Name"
                                value="Jacob Jordan"
                                disabled
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
                                    options={ranks}
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
            </CardContent>
            <Divider />
            <CardActions>
                <DetailsModal />
            </CardActions>
        </MainCard>
    </div>
));

Body.propTypes = {
    modalStyle: PropTypes.object,
    classes: PropTypes.object,
    handleClose: PropTypes.func
};

// ===========================|| SIMPLE MODAL ||=========================== //

export default function DetailsModal() {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container justifyContent="flex-end">
            <PermContactCalendarIcon onClick={handleOpen} sx={{ fontSize: '1.1rem' }} />
            <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                <Body classes={classes} modalStyle={modalStyle} handleClose={handleClose} />
            </Modal>
        </Grid>
    );
}
