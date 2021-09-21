import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import OurTeam from './components/pages/Our_team';
import News from './components/pages/News';
import GetInvolved from './components/pages/Get_involved';
import Media from './components/pages/Media';
import Values from './components/pages/Values';
import Contact_us from './components/pages/Contact_us';
import SimpleReactLightbox from 'simple-react-lightbox';
import Register from './components/pages/blog_register/Register';
import Login from './components/pages/blog_login/Login';
import Write from './components/pages/blog_write/Write';
import Settings from './components/pages/blog_settings/Settings';
import Single from './components/pages/blog_single/Single';
import BlogHome from './components/pages/blog_home/BlogHome';
import Chat from './components/pages/community/Chat';



import Comm from './components/pages/community/Comm';
import AboutUs from './components/pages/AboutUs';
import BoardOfTrustees from './components/BoardOfTrustees';
import Value from './components/pages/Value';
import PopVision from './components/PopVision';
import PopMission from './components/PopMission';
import PopObjectives from './components/PopObjectives';



function App() {
  const user = false
  return (
    <React.Fragment>
    <Router>
   
       { /* <Navbar/> */}
        <Switch>
          <Route path='/Comm'>{ user ? <Comm/> : <Register/> }</Route>
          <Route path='/room' component={Chat} />
          <Route path="/Register">{ user ? <Values/> : <Register/>}</Route>
          <Route path="/Login">{ user ? <Values/> : <Login/>}</Route>
          <Route path="/Write">{ user ? <Write/> : <Register/>}</Route>
          <Route path="/Settings">{ user ? <Settings/> : <Register/>}</Route>
          <Route path="/Post/:PostId"><Single/></Route>
          <Route path="/Login"><BlogHome/></Route>
          <Route path='/PopObjectives' component={PopObjectives}/>
          <Route path='/PopMission' component={PopMission}/>
          <Route path='/PopVision' component={PopVision}/>
          <Route path='/Login' component={GetInvolved}/>
          <Route path='/Values' component={Values}/>
          <Route path='/Value' component={Value}/>
          <Route path='/Contact_us' component={Contact_us}/>
          <Route path='/Our_team' component={OurTeam} />
          <Route path='/BoardOfTrustees' component={BoardOfTrustees}/>
          <Route path='/AboutUs' component={AboutUs}/>
          <Route path='/News' component={News} />
          <Route path='/Media' ><SimpleReactLightbox> <Media/> </SimpleReactLightbox>  </Route>
          <Route path='/' exact component={Home} />
        </Switch>  
    
      </Router>
      
    </React.Fragment>
  );
}

export default App;


