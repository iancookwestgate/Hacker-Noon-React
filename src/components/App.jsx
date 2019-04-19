import React from 'react';
import Highlights from './Highlights';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
// import NewPostForm from './NewPostForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Highlights} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;

// <Route exact path='/newpost' component={NewPostForm} />
