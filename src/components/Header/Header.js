import React from 'react'
import {
    Button,Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown

} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,NavLink, withRouter} from 'react-router-dom';
import {
    HomeRounded,
    SchoolRounded,
    WorkRounded,
    Facebook,
    Twitter,
    Linkedin,
    Github,
    Telegram
} from '@material-ui/icons';

import resumeData from '../../utils/resumeData';
import Custom_button from '../Button/button';
import './Header.css';

const Header = (props)=>{
    const pathName = props?.location?.pathname;
    return(<Navbar bg="light" expand="lg" sticky ="top" className="header">
        {/* Home Link */}
        <Nav.Link as  ={NavLink} to='/' className='header_navlink'>
           <Navbar.Brand className ='header_home'>
               <HomeRounded/>
           </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className='header_left'>
                {/* Resume Link */}
                <Nav.Link as ={NavLink} to ='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
                    {/* porfolio link */}
                <Nav.Link as ={NavLink} to ='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</Nav.Link>
                <Nav.Link as ={NavLink} to ='/Services' className={pathName === '/Services' ? 'header_link_active' : 'header_link'}>Services/Skills</Nav.Link>
                <Nav.Link as ={NavLink} to ='/Contact' className={pathName === '/Contact' ? 'header_link_active' : 'header_link'}>Contact</Nav.Link>

            </Nav>
            <div className='header_right'>
                        {Object.keys(resumeData.social).map(key => <a href={resumeData.social[key].link} target='_blank'>{resumeData.social[key].icon}</a>)}
                        <Custom_button text='Hire Me' icon={<Telegram />} />
                    </div>
        </Navbar.Collapse>
   
  </Navbar>)
};

export default withRouter(Header);