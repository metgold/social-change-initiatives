import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OurTeam from './components/pages/Our_team';
import News from './components/pages/News';
import GetInvolved from './components/pages/Get_involved';
import Media from './components/pages/Media';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/Our_Team' component={OurTeam} ><OurTeam/></Route>
          <Route path='/News' component={News} />
          <Route path='/Get_involved' component={GetInvolved} />
          <Route path='/components/pages/Media' component={Media} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
