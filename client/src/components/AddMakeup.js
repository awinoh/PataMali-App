import React, { Component } from 'react';

class AddMakeup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: '',
      image: '',
      status: '',
      description: ''
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const makeup = this.state;
    this.props.AddMakeup(makeup)

  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="makeup_name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            placeholder="Makeup Name"
            />

        <label htmlFor="makeup_price">Price</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleOnChange}
            placeholder="Price"
            />
          <button>+ADD MAKEUP</button>
      </form>
    )
  }

}

export default AddMakeup;