import React, { Component } from 'react';
import Content from './components/Content';


class Container extends Component {
  constructor(){
    super();
    this.state = {
        message: '<Container />',
      };
  }


  render() {
    return (
      <div style={{ width: '980px', margin: '50px auto' }}>

        <Content
          message={this.state.message}
        />
      </div>
    );
  }
}

export default Container;
