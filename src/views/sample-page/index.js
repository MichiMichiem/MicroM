import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <>
    <MainCard title="Sample Card">
        <Typography variant="body2">
           LDASLLSDLDS
        </Typography>
    </MainCard>
    <MainCard title="Sample Card">
    <Typography variant="body2">
       LDASLLSDLDS
        </Typography>
    </MainCard>
    </>
);

export default SamplePage;
