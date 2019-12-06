import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { getContacts, removeHandler } from '../js/Actions/actions';

export class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className='row m-2'>
        {this.props.Contacts.map((e, i) => (
          <Card style={{ maxWidth: '300px' }} key={i} className='col-3 m-2'>
            <CardBody>
              <CardTitle className='text-center font-weight-bold'>
                Contact
              </CardTitle>
              <CardSubtitle className='m-1'>Name:{e.name}</CardSubtitle>
              <CardSubtitle className='m-1'>Phone:{e.phone}</CardSubtitle>
              <CardSubtitle className='m-1'>Email:{e.email}</CardSubtitle>
            </CardBody>
            <CardBody className='row'>
              <div className='col m-1'>
                <Link to={{ pathname: `/editcontact/${e._id}` }}>
                  <Button className='col' outline color='warning'>
                    Edit
                  </Button>
                </Link>
              </div>
              <div className='col m-1'>
                <Button
                  className='col'
                  outline
                  color='danger'
                  onClick={() => this.props.removeHandler(e._id)}
                >
                  Delete
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
        <div className='col-3 m-2 d-flex b align-items-center justify-content-center'>
          <Link to={{ pathname: '/' }}>
            <Button>Back</Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { Contacts: state.Contacts };
};

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => dispatch(getContacts()),
    removeHandler: id => dispatch(removeHandler(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
