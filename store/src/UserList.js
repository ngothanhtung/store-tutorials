import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/api/users', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('token')
      })
    }).then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ loading: false });
        this.setState({ Users: data });
      });
  }
  render() {
    if (this.state.loading === false) {
      return (
        <div>
          <h2>
            Product List
        </h2>
          <ul>
            {
              this.state.Users.map((x) =>
                <li key={x._id}>
                  {x.username}
                </li>
              )
            }
          </ul>
        </div>
      );
    } else {
      return (<h2>Loading ...</h2>)
    }
  }
}

export default UserList;