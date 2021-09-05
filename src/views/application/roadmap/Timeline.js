import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Paper, Typography, List, ListItem } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@material-ui/lab';

// assets
import FastfoodIcon from '@material-ui/icons/FastfoodTwoTone';
import LaptopMacIcon from '@material-ui/icons/LaptopMacTwoTone';
import HotelIcon from '@material-ui/icons/HotelTwoTone';
import RepeatIcon from '@material-ui/icons/RepeatTwoTone';

// style constant
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '20px',
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        border: '1px dashed',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.dark
    },
    paperAlt: {
        padding: '20px',
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        border: '1px dashed',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.dark
    }
}));

// ==============================|| UI TIMELINE - CUSTOMIZED ||============================== //

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <Timeline position="alternate">
             <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Friday, 10 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Capstone End
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                              Thursday, 9 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                             Wednesday, 8 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Tuesday, 7 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">      
                            Monday, 6 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                              Friday, 3 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Thursday, 2 September 2021
                        </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                           Wednesday, 1 September 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                          Tuesday, 31 August 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Project analysis, 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                         Monday, 30 August 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <RepeatIcon />
                    </TimelineDot>
                </TimelineSeparator>
                
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h1">
                            Capstone Start 
                        </Typography>
                        <Typography>LoremIpsum50 </Typography>
                        <Typography>LoremIpsum50</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
