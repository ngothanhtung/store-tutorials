import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { newContact, saveContact } from '../actions/contact-actions';


class HorizontalForm extends React.Component {
  render() {
    return (
      <article className="article">
        <h2 className="article-title">Contact Form</h2>
        <div className="box box-default">
          <div className="box-body padding-xl">
            <form>
              <div className="form-group row">
                <label htmlFor="inputName" className="col-md-2 control-label">Contact name</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="inputName" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputEmail" className="col-md-2 control-label">Contact email</label>
                <div className="col-md-10">
                  <input type="email" className="form-control" id="inputEmail" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-md-2 col-md-10">
                  <RaisedButton onClick={this.props.onSubmit} label="Add contact" className="btn-w-md" primary />
                </div>
              </div>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

class AddContact extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.props.newContact();
  }

  onSubmit = contact => this.props.saveContact(contact);

  render() {
    return (
      <div>
        <HorizontalForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    contact: state.contactReducer.contact
  };
}

export default connect(mapStateToProps, { newContact, saveContact })(AddContact);
