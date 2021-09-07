/* eslint-disable */

import React, {useEffect} from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Chip,
    Grid,
    IconButton,
    Stack,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from '@material-ui/core';

// project imports
import axios from 'utils/axios';
import UserDetailsAlert from './UserDetailsAlert';
import UserDeleteAlert from './UserDeleteAlert';
import EditUserAlert from './EditUserAlert';


// assets
import BlockTwoToneIcon from '@material-ui/icons/BlockTwoTone';


const avatarImage = require.context('assets/images/profile', true);

// style constant
const useStyles = makeStyles((theme) => ({
    successBadge: {
        color: theme.palette.success.dark,
        width: '14px',
        height: '14px'
    },
    active: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.success.light + 60,
        color: theme.palette.success.dark
    },
    reject: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.orange.light + 80,
        color: theme.palette.orange.dark
    },
    pending: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
        color: theme.palette.warning.dark
    }
}));

// ===========================|| USER LIST 1 ||=========================== //

const UserList = () => {

    const theme = useTheme();
    const classes = useStyles();
    const [deleteUser, setDeleteUser] = React.useState('')
    const [deleteData, setDeleteData] = React.useState([])
    const [data, setData] = React.useState([])
    const [userArray, setUserArray] = React.useState([]);
    const [curOrg, setCurOrg] = React.useState(1)
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [rank, setRank] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userjobTitle, setJobTitle] = React.useState('');
    const [userpermissions, setPermissions] = React.useState('');
    const [userorganization, setOrganization] = React.useState('');
    const [usersection, setSection] = React.useState('');
    const [useremail, setEmail] = React.useState('');
    const [userhomeAddress, setHomeAddress] = React.useState('');
    const [usercellPhone, setCellPhone] = React.useState('');
    const [userafsc, setAfsc] = React.useState('');
    const [updatedUser, setUpdatedUser] = React.useState({});
    var API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://sdi06-10.staging.dso.mil/api'
    useEffect(() => {
        fetch(`${API_URL}/structure/organization/1`)
            .then(data => data.json())
            .then((data) => {
                setData(data)
                getData();
            })
    }, [])

    


    const getData = async () => {
        try {
            const response = await fetch(`${API_URL}/users/organization/${curOrg}`)
            setUserArray( await response.json())
        } catch (err) {
            console.log('There was an error:', err)
        } 
    };

    
    
    if (userArray) {
        return (
    
            <TableContainer
            
                sx={{
                    boxSizing: 'border-box',
                    display: 'block',
                    maxWidth: 'calc(100vw - 70px)'
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Rank</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Organization</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell>Job</TableCell>
                            <TableCell>Permission Level</TableCell>
                            <TableCell  align="center" sx={{ pr: 3 }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
    
    
    
    
                    {userArray.map((user) => {
                        return (
                        <TableRow hover key={user.user_id}>
                            <TableCell sx={{ pl: 3 }}>{user.user_id}</TableCell>
                            <TableCell>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="subtitle1" component="div">
                                        {`${user.first_name} ${user.last_name}`}
                                        </Typography>
                                        <Typography align="left" variant="subtitle2" noWrap>
                                        {user.user_name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>{user.rank}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.organization_id}</TableCell>
                            <TableCell>{user.section_id}</TableCell>
                            <TableCell>{user.job_title}</TableCell>
                            <TableCell>{user.permission_level}</TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                                <Stack direction="row" justifyContent="center" alignItems="center">
                                    <Tooltip placement="top" title="Edit">
                                        <IconButton sx={{
                                                color: theme.palette.warning.dark,
                                                borderColor: theme.palette.warning.main,
                                                '&:hover ': { background: theme.palette.warning.light }
                                            }}>
                                            <EditUserAlert organization={data.organization} sectionList={data.sections} user={user}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip  placement="top" title="Delete" >
                                        <IconButton 
                                            sx={{
                                                color: theme.palette.orange.dark,
                                                borderColor: theme.palette.orange.main,
                                                '&:hover ': { background: theme.palette.orange.light }
                                            }}
                                        >
                                            <UserDeleteAlert user={user}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip placement="top" title="Details">
                                        <IconButton
                                            sx={{
                                                color: theme.palette.primary.dark,
                                                borderColor: theme.palette.primary.main,
                                                '&:hover ': { background: theme.palette.primary.light }
                                            }}
                                        >
                                            <UserDetailsAlert user={user}/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </TableCell>
                        </TableRow>)
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else {
        return (
            <div></div>
        )
    }
};

export default UserList;
