import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Label, Input } from 'reactstrap';
import { addHandler, editHandler } from '../js/Actions/actions';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
    email: ''
  };
  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  componentDidMount() {
    let contact = this.props.Contacts.filter(
      e => e._id === this.props.match.params.id
    );
    this.props.edit &&
      this.setState({
        name: contact[0].name,
        phone: contact[0].phone,
        email: contact[0].email
      });
  }
  render() {
    return (
      <div className='w-50 m-auto'>
        <h3>{this.props.edit ? 'Edit Contact' : 'Add Contact'}</h3>
        <Label for='Name'>Name</Label>
        <Input
          type='text'
          name='name'
          id='Name'
          placeholder='Enter the name'
          value={this.state.name}
          onChange={this.changeHandler}
        />

        <Label for='phone'>Phone Number</Label>
        <Input
          type='text'
          name='phone'
          id='phone'
          placeholder='Enter a phone number'
          value={this.state.phone}
          onChange={this.changeHandler}
        />

        <Label for='Email'>Email</Label>
        <Input
          type='text'
          name='email'
          id='Email'
          placeholder='enter Email'
          value={this.state.email}
          onChange={this.changeHandler}
        />

        <div className='text-right'>
          <Link to={{ pathname: '/Contacts' }}>
            <Button className='col-2 m-1'>Back</Button>
          </Link>
          <Link to={{ pathname: '/Contacts' }}>
            <Button
              className='col-2 m-1'
              color='primary'
              onClick={
                this.props.edit
                  ? () =>
                      this.props.editHandler(
                        this.props.match.params.id,
                        this.state.name,
                        this.state.phone,
                        this.state.email
                      )
                  : () =>
                      this.props.addHandler(
                        this.state.name,
                        this.state.phone,
                        this.state.email
                      )
              }
            >
              {this.props.edit ? 'Save' : 'Add'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    Contacts: state.Contacts
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addHandler: (name, phone, email) =>
      dispatch(addHandler(name, phone, email)),
    editHandler: (_id, name, phone, email) =>
      dispatch(editHandler(_id, name, phone, email))
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ContactForm);
