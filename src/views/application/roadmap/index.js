import React from 'react';

// material-ui
import { Grid, Divider } from '@material-ui/core';

// project imports
import Timeline from './Timeline';
import TimelineNext from './TimelineNext';


import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| Road Map ||============================== //

const Roadmap = () => (
    <>
     <MainCard title="Project MicroM" secondary="From Monday to Friday">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Project Roadmap">
                    <Timeline />
                </SubCard>
                <Divider/>
                <SubCard title="Capstone Roadmap">
                    <TimelineNext />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
</>
);

export default Roadmap;
