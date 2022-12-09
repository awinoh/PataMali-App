import React from 'react';





class Landing extends React.Component {
  

state = {
  ourShops: [],
  display: false,
  title: '',
  url: ''
};

displayList = () => {
  const { display } = this.state;
  this.setState({ display: !display });
};

getTitle = (shop) => {
  const {title, url} = shop;
  this.setState({ title, url, display: false });
};

goToShop = () => {
 
  const { url } = this.state;
 
  this.props.history.push(`/shop/:${url}`)
}


render() {
  return (
    <div className='shop_select'>
      <div className='shop_select_top'>
        
        <div onClick={this.displayList}
        className='shop_select_top-header font-effect-outline'>
          {this.state.title ? this.state.title : 'Choose a shop'}
          </div>
        
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div> 
      </div>

      {this.state.display ? (<div className='shop_select_bottom'>
        <ul>
          {this.state.ourShops.map(shop => {
            return <li onClick={() => this.getTitle(shop)} key={shop.id}>{shop.title}</li>;
            })}
        </ul>
      </div>) : null}
      {this.state.title && !this.state.display ? (<button onClick={this.goToShop}> Go to the shop</button>) : null}
      </div>
    
    
  );
}

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/shops')
      .then(response => response.json())
      .then(data => {
        this.setState({
          ourShops: data
        })
      })
  }
}


export default Landing;