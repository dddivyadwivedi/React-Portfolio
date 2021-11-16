import { Container ,Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services_Skills/services';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App(){
    return(
    
    <Container className ="top_60">
        <Grid container spacing="7">
           < Grid item xl ={12} sm={12}  md={4} lg={3} ><Profile /></ Grid>
           < Grid item xs> 
           <Router>
          
           
               <Header/>
               <div className='main_content container_shadow'>
               <Switch>
               <Route path = '/Portfolio' exact>
               <Portfolio/>
               </Route>
               <Route path = '/' exact>
               <Resume />
               </Route>
               <Route path = '/Services' exact>
               < Services />
               </Route>
               <Route path = '/Contact' exact>
               <Contact />
               </Route>
               </Switch>
               </div>
               
               </Router>
              
          
       
           <Footer />
          
           </ Grid>
        </Grid>
    </Container>
    )
}


export default App