/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';

// Striker Custom
import TreeClass from './Tree';
// import OrgChartData from './SampleData';
import Child from './child';
// material-ui
import { Typography, Grid, List, ListItem, Card, Button } from '@material-ui/core';
import { Tree, TreeNode } from 'react-organizational-chart';
import { gridSpacing } from '../../../store/constant'
import MuiTypography from '@material-ui/core/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TeamMembers from './TeamMembers'

var API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://sdi06-10.staging.dso.mil/api'

// ==============================|| Page: Organization ||============================== //

// <TreeNode label={<div>Production</div>}/>
const Orgchart = () => {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`${API_URL}/structure/organization/1`)
            .then(data => data.json())
            .then((data) => {
                setData(data)
            })
        fetch(`${API_URL}/users/organization/1`)
            .then(data => data.json())
            .then((data) => {
                setUsers(data)
            })
    }, [])
    
    function renderOrgChart () {
        if (Object.keys(data)[0] === "organization" && Object.keys(data)[1] === "sections" && users !== []) {
            // convert array of sections into a Tree.
            const orgTree = new TreeClass(data.organization);
            data.sections.forEach((section) => {
                if (section.parent_section_id == 0) {
                    orgTree.addChild(section)
                } else {
                    orgTree.getNodeById(Number(section.parent_section_id)).addChild(section)
                }
            })
        
            // Call function to render the tree.
            function renderTree(cur) {
                if (cur.children.length !== 0) {
                    return <Child children={cur.children} users={users}/>
                }
            }
            return (
                <Tree lineWidth={'3px'} lineColor={(theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.main)} label={<>
                    <MuiTypography variant="h1" gutterBottom>
                        {data.organization.name}
                    </MuiTypography>
                    <MuiTypography variant="h2" gutterBottom>
                        {data.organization.location}
                    </MuiTypography>
                </>
                }>
                    {renderTree(orgTree)}
                </Tree>
            )
        }
    }

    const theme = useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                    <MainCard>
                        {renderOrgChart()}
                    </MainCard>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
)};

export default Orgchart;