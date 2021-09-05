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
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.secondary.dark
    },
    paperStart: {
        padding: '20px',
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.warning.dark
    },
    paperEnd: {
        padding: '20px',
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.success.light,
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.success.dark
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
                    <Paper elevation={3} className={classes.paperEnd}>
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
                    <Paper elevation={3} className={classes.paperAlt}>
                        <Typography variant="h4" component="h1">
                            Labor Day ! Two Fun facts
                        </Typography>
                        <Typography>1. The first Labor Day “parade” was actually a strike.</Typography>
                        <Typography>2. Canada had the idea first.</Typography>
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
                            Day 4, Front-End + Back-End
                        </Typography>
                        <Typography>Refactoring front-end</Typography>
                        <Typography>Covering 100% for back-end testing</Typography>
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
                            Day 3, Front-End
                        </Typography>
                        <Typography>All static pages ready</Typography>
                        <Typography>First endpoints for Express</Typography>
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
                            Day 2, Firt Code 
                        </Typography>
                        <Typography>Writing UI logic</Typography>
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
                            Day 1, Setting up
                        </Typography>
                        <Typography>Creating ERD</Typography>
                        <Typography>Building Mock Data</Typography>
                        <Typography>Selecting basic artboards from wireframes</Typography>
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
                    <Paper elevation={3} className={classes.paperStart}>
                        <Typography variant="h4" component="h1">
                            Capstone Start, Day 0
                        </Typography>
                        <Typography>Problem Statement</Typography>
                        <Typography>Writting User Stories</Typography>
                        <Typography>Choosing Tech Stack</Typography>
                        <Typography>Defining resources</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
