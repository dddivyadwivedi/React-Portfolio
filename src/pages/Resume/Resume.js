import { Typography, Grid, Icon, Paper, TextField } from '@material-ui/core'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work';
import './Resume.css'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import Custom_button from '../../components/Button/button'
const Resume = () => (
    <div>
        <Grid container className='section pb_45 pt_45'>
            <Grid item className='section_title mb_30' >
                <span></span>
                <h6 className='section_title_text'>About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' className="aboutMe_text">
                    {resumeData.about}
                </Typography>
            </Grid>

        </Grid>

        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30' >
                <span></span>
                <h6 className='section_title_text'>Resume</h6>
            </Grid>

            {/* Work Experience Section */}
            <Grid item xs={12}>
                <Grid container className='resume_timeline'>
                    <Grid item sm={12} md={6} >
                        <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                            {resumeData.experiences.map(experience => (
                                <TimelineItem>
                                    <TimelineSeparator className='separate_padding'>
                                        <TimelineDot variant='outlined' className='timeline_dot' />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className='timeline_content'>

                                        <Typography className='timeline_title'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>

                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>

                    </Grid>

                    {/* Education Section */}
                    <Grid item sm={12} md={6} >
                        <CustomTimeline title='Education' icon={<SchoolIcon />}>
                            {resumeData.educations.map(education => (
                                <TimelineItem>
                                    <TimelineSeparator className='separate_padding'>
                                        <TimelineDot variant='outlined' className='timeline_dot' />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className='timeline_content'>

                                        <Typography className='timeline_title'>{education.Internship}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{education.description}</Typography>

                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>


                    </Grid>
                </Grid>
            </Grid>
        </Grid>

                                {/* My services */}
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



    </div>
)

export default Resume