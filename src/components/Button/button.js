import { Button } from '@material-ui/core';
import React from 'react';
import './button.css';
const Custom_button =({text ,icon ,...otherProps})=>{
    return (
    <Button className="custom_btn"  endIcon={icon ?(<div className="btn_icon_container">{icon}</div>):null}{...otherProps}><span className="btn_text">{text}</span></Button>  
      )
}

export default Custom_button;
