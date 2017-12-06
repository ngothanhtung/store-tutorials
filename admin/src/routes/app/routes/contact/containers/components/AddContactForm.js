import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataViewModel: {
        firstname: '',
        lastname: '',
        email: ''
      }
    };
  }


  onSubmit = () => {
    this.props.saveContact(
      {
        id: '9',
        name: {
          first: this.state.dataViewModel.firstname,
          last: this.state.dataViewModel.lastname,
        },
        email: this.state.dataViewModel.email,
      }
    );
  };

  // BINDING
  handleChange = (field, event) => {
    const object = this.state.dataViewModel;
    object[field] = event.target.value;
    this.setState({ dataViewModel: object });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <div className="form-group row">
            <label htmlFor="inputFirstName" className="col-md-2 control-label">First name</label>
            <div className="col-md-10">
              <input type="text" className="form-control" id="inputFirstName" placeholder="" value={this.state.dataViewModel.firstname} onChange={this.handleChange.bind(this, 'firstname')} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputLastName" className="col-md-2 control-label">Last name</label>
            <div className="col-md-10">
              <input type="text" className="form-control" id="inputLastName" placeholder="" value={this.state.dataViewModel.lastname} onChange={this.handleChange.bind(this, 'lastname')} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail" className="col-md-2 control-label">Contact email</label>
            <div className="col-md-10">
              <input type="email" className="form-control" id="inputEmail" placeholder="" value={this.state.dataViewModel.email} onChange={this.handleChange.bind(this, 'email')} />
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-md-2 col-md-10">
              <RaisedButton type="submit" label="Add contact" className="btn-w-md" primary />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContactForm;

