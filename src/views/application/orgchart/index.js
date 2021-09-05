/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';

// Striker Custom
import TreeClass from './Tree';
import OrgChartData from './SampleData';
import Child from './child';
// material-ui
import { Typography, Grid, List, ListItem, Card, Button } from '@material-ui/core';
import { Tree, TreeNode } from 'react-organizational-chart';
import { gridSpacing } from '../../../store/constant'
import MuiTypography from '@material-ui/core/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TeamMembers from './TeamMembers'

// ==============================|| Page: Organization ||============================== //

// <TreeNode label={<div>Production</div>}/>
const Orgchart = () => {
    // convert array of sections into a Tree.
    const orgTree = new TreeClass(OrgChartData.organization);
    OrgChartData.sections.forEach((section) => {
        if (section.parent_section_id === 0) {
            orgTree.addChild(section)
        } else {
            orgTree.getNodeById(section.parent_section_id).addChild(section)
        }
    })

    // Call function to render the tree.
    function renderTree(cur) {
        if (cur.children.length !== 0) {
            return <Child children={cur.children} users={OrgChartData.users}/>
        }
    }
    const theme = useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                    <MainCard>
                    <Tree lineWidth={'3px'} lineColor={theme.palette.primary.light} label={<>
                                    <MuiTypography variant="h1" gutterBottom>
                                        {OrgChartData.organization.name}
                                    </MuiTypography>
                                    <MuiTypography variant="h2" gutterBottom>
                                        {OrgChartData.organization.location}
                                    </MuiTypography>
                                </>
                    }>
                        {renderTree(orgTree)}
                    </Tree>
                    </MainCard>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
)};

export default Orgchart;