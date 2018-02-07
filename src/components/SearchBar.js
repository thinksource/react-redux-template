import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';


class SearchBar extends React.Componenet{
  constructor(props){
    super();
    this.state={value:""};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  render(){
    return (
      <p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button></button>
      </p>
    )
  }
}
