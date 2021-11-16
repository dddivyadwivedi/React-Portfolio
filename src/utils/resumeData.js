import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import { GitHub, Language, WebOutlined, YouTube } from '@material-ui/icons';
export default {
    name :'Divya',
    title : 'Web Devlopment Learner' ,
    caption : 'A brief caption',
    birthday :'28 August 1999',
    email : 'dddivya7980@gmail.com',
    address : '50 D Mukta Ram Babu Street Kolkata -700007',
    phone :'7980730717',
    social :{
        insta :{
            link : '',
            text : '',
            icon :<InstagramIcon />,
        }
    },
    about :'something about me',
    experiences : [

    {
        Internship : 'Front End Developer -Ardent Computech',
        date : '1st September 2020 - 31st November 2020',
        description : 'A group project on E-Commerce where I have done the frontend part'
    }
        
    ],
    educations : [
        {
            Internship : 'Front End Developer -Ardent Computech',
            date : '1st September 2020 - 31st November 2020',
            description : 'A group project on E-Commerce where I have done the frontend part'
        }
    ],
    services :[
        {
            title : 'Web Developement',
            caption : 'A brief caption',
            description :'I am a web developer',
            icon : <WebOutlined />
        }
    ],
    skills :[
        {
            title : 'FRONT - END',
            description : [
                'React JS',
                'Angular',
                'JavaScript',
                'TypeScript',
                'Bootstrap'
                
            ]
        },

        {
            title : 'BACK - END',
            description : [
                'My Sql',
                'Node',
                'Python',
                'Java'
                
                
            ]
        },

        {
            title : 'SOURCE - CONTROL',
            description : [
                'Git',
                'GitHub'   
            ]
        }
    ],

    projects : [{
        tag : 'React',
        image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dwbbmgi_fGV-Rqt0m_56ZwHaEK%26pid%3DApi&f=1',
        title: 'Project 1',
        caption : 'A brief caption',
        description : 'this is my project description',
        links : [{
            link : 'https://www.google.com' , icon : <YouTube/>,
        },
        {
            link : 'https://www.google.com' , icon : <GitHub/>,
        },
        {
            link : 'https://www.google.com' , icon : <Language/>,
        }
    
    ]
    }]
        
            
    
}