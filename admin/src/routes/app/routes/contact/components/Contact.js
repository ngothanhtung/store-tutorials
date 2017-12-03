import React from 'react';
import APPCONFIG from 'constants/Config';

import QueueAnim from 'rc-queue-anim';

import { hashHistory } from 'react-router';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="">
        <h2>Contact Page</h2>
      </div>
    );
  }
}

const Page = () => (
  <section className="container-fluid with-maxwidth chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Contact /></div>
      
    </QueueAnim>
  </section>
);
module.exports = Page;
