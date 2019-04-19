import React from 'react';
import TicketList from './TicketList';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route exact path='/newticket' component={NewTicketForm} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
