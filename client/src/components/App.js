import React from 'react';
import Order from './Order'
import Header from './Header';
import AdminRecord from './AdminRecord'
import Makeups from './Makeups'
import AddMakeup from './AddMakeup'
import makeupAction from '../actions/makeupAction'



class App extends React.Component {
 
constructor() {
  super()

  this.state = {
    makeups: [],
    orders: {}
  }
}

componentDidMount(){
 makeupAction.fetchMakeups()
 .then(makeups => this.setState({ makeups }))
}

addMovie = makeup => {
  makeupAction.createMakeup(makeup).then(makeup => this.setState({
    makeups: this.state.makeups.concat(makeup)
  }))
}


  
  render() {
    return(
    <div className='makeup-paradise'>
      <div className='record'>
        <Header title='Makeup App' />
        
       
      </div>
     
      <Order />
      <AdminRecord/>
      <div>
        <Makeups makeups={this.state.makeups}/>
      </div>

      <div>
        <AddMakeup addMakeup={this.addMakeup}/>
      </div>
    
    </div>
    );
  }
}

export default App; 