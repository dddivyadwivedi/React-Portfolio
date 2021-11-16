import './Portfolio.css';
import React, { useState } from 'react';
import { Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Grow } from '@material-ui/core';
import { Typography, Grid, Icon, Paper, TextField } from '@material-ui/core';
import resumeData from '../../utils/resumeData';



const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState('False');


  return (<Grid container className='section pb_45 pt_45' spacing={1}>
    {/* Title */}
    <Grid item className='section_title mb_30' >
      <span></span>
      <h6 className='section_title_text'>Portfolio</h6>
    </Grid>
    {/* Tabs */}
    <Grid item xs={12}>
      <Tabs value={tabValue} indicatorColor='white' className='customTabs' onChange={(event, newValue) => setTabValue(newValue)}>
        <Tab label='All' value="All" className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />
        {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
          <Tab label={tag} value={tag} className={tabValue == 'tag' ? 'customTabs_item active' : 'customTabs_item'} />
        ))}
      </Tabs>
    </Grid>


    {/* Projects */}
    <Grid item xs={12}>
      <Grid container spacing={2}>
        {resumeData.projects.map(project => (
          <>
            {tabValue == project.tag || tabValue == 'All' ? (<Grid item xs={12} sm={6} md={3}>
              <Grow in timeout={1000}>
              <Card className='custom_card' onClick={() => setProjectDialog(project)}>
                <CardActionArea>
                  <CardMedia className='custom_card_image' image={project.image} title={project.title} />
                  <CardContent><Typography className='custom_card_title' variant={'body2'}>{project.title}</Typography>
                    <Typography className='custom_card_caption' variant='caption'>{project.caption}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grow>
            </Grid>) : null}

          </>

        ))}

      </Grid>
    </Grid>

    <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
      <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
      <img src='' alt='' className='projectDialog_image'/>
      <DialogContent>
        <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
        {projectDialog.description}
      </DialogContent>
      <DialogActions className='projectDialog_actions'>
        {projectDialog?.links?.map((link) => <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>)}
      </DialogActions>
    </Dialog>

  </Grid>)
}

export default Portfolio
