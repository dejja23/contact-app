import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import ContactForm from './Components/ContactForm';
import Contacts from './Components/Contacts';

function App() {
  return (
    <Router className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/addcontact' component={ContactForm} />
        <Route
          path='/editcontact/:id'
          render={props => <ContactForm {...props} edit={true} />}
        />
        <Route exact path='/Contacts' component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;
