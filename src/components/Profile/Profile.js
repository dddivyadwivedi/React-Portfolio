import React from 'react'
import {Typography} from '@material-ui/core';
import MyImage from '../../assets/images/divya.jpeg'
import './Profile.css';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumedata from '../../utils/resumeData'
import resumeData from '../../utils/resumeData';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Button from '../Button/button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineitem =({title,text,link}) =>{
   return( <TimelineItem>

        <CustomTimelineSeparator />
        <TimelineContent>
            {link ?(<Typography><span>{title}</span>{ " "}<a href={link} target="_blank" >{text}</a></Typography>):(<Typography><span>{title}</span>{text}</Typography>)}
        </TimelineContent>
    </TimelineItem>
   )
}

const Profile = ()=>{
    return(<div className ='profile container_shadow'>
        <div className ='profile_name'>
            <Typography className ='name'>{resumedata.name}</Typography>
            <Typography className ='title'>{resumeData.title}</Typography>
        </div>
        <figure className='profile_image'>
    <img src={MyImage} alt ='Profile' className='img'></img>
        </figure>
        <div className='profile_information'>
           <CustomTimeline icon={<PersonPinIcon />} >
               <CustomTimelineitem title='Name : ' text ={resumeData.name} />
               <CustomTimelineitem title='Title : ' text ={resumeData.title} />
               <CustomTimelineitem title='Birthday : ' text ={resumeData.birthday} />
               <CustomTimelineitem title='Email : ' text ={resumeData.email} />
               {Object.keys(resumeData.social).map[(key)=>{
                    <CustomTimelineitem title={key} text ={resumeData.social[key].text} link ={resumeData.social[key].link} />
               }]}
           </CustomTimeline>
            <br></br>
            <div className ="button_container">
            <Button text="Download CV" icon={<GetAppIcon/>} />

            </div>
           
        </div>
    </div>)
}

export default Profile