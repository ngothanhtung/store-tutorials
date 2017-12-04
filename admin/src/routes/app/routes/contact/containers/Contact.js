import React from 'react';
import APPCONFIG from 'constants/Config';
import QueueAnim from 'rc-queue-anim';
import { hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact-actions';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'contact page'
    };
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <section className="container-fluid with-maxwidth chapter">
        <QueueAnim type="bottom" className="ui-animate">
          <div key="1">
            <h2>Contact Page</h2>
          </div>
        </QueueAnim>
      </section>
    );
  }
}


// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
    contacts: state.contactReducer.contacts
  };
}

// export default connect(mapStateToProps, {fetchContacts})(Page);

module.exports = connect(mapStateToProps, { fetchContacts })(Contact);
