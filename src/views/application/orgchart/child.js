/* eslint-disable */
import React from 'react';
import { TreeNode } from 'react-organizational-chart';
import { Card } from '@material-ui/core';


// material-ui
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import TeamMembers from './TeamMembers';


function Child({children, users}) {
    function renderChild(child) {
        if (child.children.length > 0) {
            return (<Child children={child.children} users={users}/>);
        }
    }
    return (
        <>
            {children.map((child)=>{
                let passUsers = [];
                users.forEach((user) => {
                    if (user.section_id === child.value.section_id) {
                        passUsers.push(user);
                    }
                })
                return (
                    <>
                        <TreeNode label={<TeamMembers section_id={child.value.section_id} location={child.value.location} title={child.value.name} userData={passUsers}/>}>
                            {renderChild(child)}
                        </TreeNode>
                    </>
                )
            })}
        </>
    );
}

export default Child;