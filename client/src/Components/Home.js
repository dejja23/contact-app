import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>
      <h3>Contact App</h3>
      <div>
        <Link to={{ pathname: '/Contacts' }}>
          <Button className='m-2' color='success'>
            Contact List
          </Button>
        </Link>
        <Link to={{ pathname: '/addContact' }}>
          <Button className='m-2' color='primary'>
            Add Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
