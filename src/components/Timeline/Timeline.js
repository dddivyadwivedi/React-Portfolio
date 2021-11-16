import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from '@material-ui/core'

import './Timeline.css'

const CustomTimeline = ({ title, icon, children }) => (
    <div>
        <Timeline className='timeline'>
            <TimelineItem className='timeline_firstitem'>
                <TimelineSeparator className='separate_padding'>
                    <TimelineDot className='timeline_dot_header' >{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography variant='h6' className='timeline_header'>{title}</Typography></TimelineContent>
            </TimelineItem>

            {children}




        </Timeline>
    </div>
)

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className='separate_padding'>
        <TimelineDot variant='outlined' className='timeline_dot' />
        <TimelineConnector />
    </TimelineSeparator>
)

export default CustomTimeline