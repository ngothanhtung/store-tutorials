import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/api/products', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('token')
      })
    }).then(res => res.json())
      .then((result) => {
        console.log(result);
        if (result.success === false) {
          // token failed

        } else {
          this.setState({ loading: false });
          this.setState({ Products: result.data });
        }
      });
  }
  render() {
    if (this.state.loading === false) {
      return (
        <div>
          <h2>
            Product List
          </h2>
          <div className="row">

            {
              this.state.Products.map((x) =>
                <div style={{ textAlign: "center", marginBottom: "40px" }} className="col-md-4" key={x._id}>
                  <div className="img-thumbnail" style={{ padding: "8px"}}>
                    <img alt="" style={{ width: "100%" }} src={x.image.coverImageUrl} />
                    <h3>{x.name}</h3>
                    <strong>{x.price.price}</strong>
                    <br />
                    <i>{x.promotion.discount}</i> %
                  </div>
                </div>
              )
            }

          </div>
        </div>
      );
    } else {
      return (<h2>Loading ...</h2>)
    }
  }
}

export default ProductList;