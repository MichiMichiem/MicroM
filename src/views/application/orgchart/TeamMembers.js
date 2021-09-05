/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import UserDetailsAlert from './UserDetailsAlert';
import SubCard from 'ui-component/cards/SubCard';

const useStyles = makeStyles((theme) => ({
    card: {
        borderColor: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.main,
        border: '3px solid'
    }
}));

// ===========================|| DATA WIDGET - TEAM MEMBERS CARD ||=========================== //

const TeamMembers = ({ title, location, section_id, userData,}) => {
    const classes = useStyles();
    return (
    <SubCard className={classes.card} title={<>{title}<MuiTypography variant="subtitle1" gutterBottom>{location}</MuiTypography><MuiTypography variant="subtitle2" gutterBottom>Section ID: {section_id}</MuiTypography></>} content={false}>
        <CardContent>
            <Grid container spacing={gridSpacing} alignItems="center">
                {userData.map((user) => {
                    return (
                        <UserDetailsAlert user={user}/>
                    )
                })}
            </Grid>
        </CardContent>
        <Divider />
    </SubCard>
    )
};

TeamMembers.propTypes = {
    title: PropTypes.string
};

export default TeamMembers;
