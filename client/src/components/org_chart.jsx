import { Container, Box, List, ListItemIcon, ListItemText, Paper, Grid } from '@material-ui/core';
import Section from './section.jsx';
import { flexbox } from '@material-ui/system';
import { Tree, TreeNode } from 'react-organizational-chart';

export default function Organization() {
    return (
      
<>

        <Tree lineWidth={'3px'} lineColor={'blue'} label={<Section section_name='20 AMXS' location='BAFB'/>}> 
          <TreeNode label={<Section section_name='Production' location='Hanger 6'/>}>
              <TreeNode label={<Section section_name='Crew 1' location='FL Ste 6'/>}/>
              <TreeNode label={<Section section_name='Crew 2' location='FL Ste 15'/>}/>
              <TreeNode label={<Section section_name='Crew 3' location='FL Ste 17'/>}/>
              <TreeNode label={<Section section_name='Crew 3' location='FL Ste 17'/>}/>

              
        
          </TreeNode>
          <TreeNode label={<Section section_name='JETS' location='Hanger 2'/>}>
              <TreeNode label={<Section section_name='Propulsion' location='RM 45'/>}/>
              <TreeNode label={<Section section_name='Fuels' location='Bay 2'/>}/>
          </TreeNode >
        </Tree>
      </>
    );
  }