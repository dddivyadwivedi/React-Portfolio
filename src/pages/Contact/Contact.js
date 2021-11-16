import { Typography, Grid, Icon, Paper, TextField } from '@material-ui/core'
import React from 'react';
import resumeData from '../../utils/resumeData';
import Custom_button from '../../components/Button/button';
import './Contact.css';
import {useState} from 'react';
import Axios from 'axios';
const Contact = () => {
  const [state , setState] = useState({
    name : '',
    email : '',
    message : '',
  });

  const handleChange=(event)=>{
    const { name , value} = event.target;
    setState({
      ...state,
      [name] : value,
    })
    console.log(state);
  }

  const handleSubmit = ()=>{
    Axios.post('http://localhost:4000/contact',state)
    .then(res =>{
      alert(res.data);
    })
  }

    return (<div>
        <Grid container>
        <Grid container className='section pt_45 pb_45' spacing={5}>
            {/* Contact Form */}
            <Grid item x6={12} lg={7}>
                <Grid item className='section_title mb_30' >
                    <span></span>
                    <h6 className='section_title_text '>Contact Form</h6>
                </Grid>
                <Grid item x6={12}>
                    <Grid container spacing={4}>
                        <Grid item x6={12} sm={6}>
                            <TextField fullWidth name='name' label='Name'onChange={handleChange} />

                        </Grid>
                        <Grid item x6={12} sm={6}>
                            <TextField fullWidth name='email' label='Email' onChange={handleChange} />

                        </Grid>
                        <Grid item x6={12}>
                            <TextField fullWidth name='message' label='Message' multiline rows={4} onChange={handleChange} />

                        </Grid>
                        <Grid item xs={12}>
                            <Custom_button text='Submit' onClick={handleSubmit} />
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
            {/* Contact Information */}
            <Grid item x6={12} lg={5}>
                <Grid container>
                    <Grid item className='section_title mb_30' >
                        <span></span>
                        <h6 className='section_title_text '>Contact Information</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing = {4}>
                            <Grid item xs={12} >
                                <Typography className='contactinfo_item'>   <span>Address : </span>{resumeData.address}  </Typography>
                            </Grid>
                            <Grid itemxs={12} >
                                <Typography className='contactinfo_item'>   <span> Phone : </span>{resumeData.phone}  </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactinfo_item'>   <span>Email : </span>{resumeData.email}  </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                                <Grid item xs={12}>
                                    <Grid container className='contactinfo_socialContainer' >
                                        {Object.keys(resumeData.social).map(det =>{
                                          return  <Grid item className='contactinfo_social'>
                                                < a href={resumeData.social[det].link}>{resumeData.social[det].icon}</a>
                                            </Grid>
                                        })}
                                    </Grid>
                                </Grid>
                </Grid>
            </Grid>


        </Grid>
        </Grid>
    </div>)
}
export default Contact;

