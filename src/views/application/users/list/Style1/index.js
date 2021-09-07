import React, {useState, useEffect} from 'react';

// material-ui
import { Button, Grid, InputAdornment, Menu, MenuItem, OutlinedInput, Pagination, Typography } from '@material-ui/core';

// project imports
import UserList from './UserList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AddUserAlert from './AddUserAlert';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import { IconSearch } from '@tabler/icons';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import SampleData from '../../../orgchart/SampleData';
var API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://sdi06-10.staging.dso.mil/api'

// ===========================|| USER LIST STYLE 1 ||=========================== //

const ListStylePage1 = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = useState([])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    useEffect(() => {
        fetch(`${API_URL}/structure/organization/1`)
            .then(data => data.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Personnel</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={9}>
                        <OutlinedInput
                            id="input-search-list-style1"
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="1rem" />
                                </InputAdornment>
                            }
                            size="small"
                        />
                    </Grid>
                    <Grid item>
                       <AddUserAlert organization={data.organization} sectionList={data.sections}/>
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <UserList users={SampleData.users} />
            {/* <Grid item xs={12} sx={{ p: 3 }}>
                <Grid container justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Pagination count={10} color="primary" />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="link"
                            size="large"
                            sx={{ color: 'grey.900' }}
                            color="secondary"
                            endIcon={<ExpandMoreRoundedIcon />}
                            onClick={handleClick}
                        >
                            10 Rows
                        </Button>
                        <Menu
                            id="menu-user-list-style1"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            variant="selectedMenu"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                        >
                            <MenuItem onClick={handleClose}> 10 Rows</MenuItem>
                            <MenuItem onClick={handleClose}> 20 Rows</MenuItem>
                            <MenuItem onClick={handleClose}> 30 Rows </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid> */}
        </MainCard>
    );
};

export default ListStylePage1;
