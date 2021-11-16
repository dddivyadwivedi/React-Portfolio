import React from 'react'
import { Typography, Grid, Icon, Paper, TextField } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './services.css';
const Services = ()=>{
    return(<div>
        <Grid container>
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30' >
                <span></span>
                <h6 className='section_title_text'>My Services</h6>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3} justify='space-around' >
                    {resumeData.services.map(service => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'>
                                    {service.icon}
                                </Icon>
                                <Typography className='service_title' variant='h6'>{service.title}</Typography>
                                <Typography className='service_description' variant='body2'>{service.description}</Typography>
                            </div>
                        </Grid>

                    ))}
                </Grid>
            </Grid>
        </Grid>


        <Grid container className='section graybg pd_45 p_50'>
            <Grid item xs={12}>
                <Grid container justify='space-between' spacing={3}>
                    {resumeData.skills.map(skill => (
                        <Grid item xs={12} sm={6} md={3} mb_30>
                            <Paper elevation={0} className='skill'>
                                <Typography variant='h6' className='skills_title'>
                                    {skill.title}
                                </Typography>
                                {skill.description.map(
                                    item => (
                                        <Typography variant='body2' className='skill_description'>
                                            <TimelineDot variant={'outlined'} className='timeline_dot' />
                                            {item}
                                        </Typography>
                                    )
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
        </Grid>
    </div>)
}
export default Services