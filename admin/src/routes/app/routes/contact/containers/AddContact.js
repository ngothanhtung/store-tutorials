import React from 'react';
import { connect } from 'react-redux';
import AddContactForm from './AddContactForm';
import { newContact, saveContact } from '../actions/contact-actions';

class AddContact extends React.Component {
  render() {
    return (
      <AddContactForm saveContact={this.props.saveContact} />
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactReducer.contact
  };
}

export default connect(mapStateToProps, { saveContact })(AddContact);
