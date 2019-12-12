import React, { Component } from 'react';

class Counter extends Component {

  state = {value:0}

  handleIncrement = () =>{
    this.setState({value: this.state.value+1});

  }
  handleDecrement = ()=>{
    this.setState({value: this.state.value-1});
  }
  constructor(props){
    super(props);
    this.state = {value : 0};

  }
/*
  handleIncrement(){
    this.setState({value: this.state.value+1});

  }

  handleDecrement(){
    this.setState({value: this.state.value-1});
  }
  */
 // state = {  }
  render() {
    return ( <div>
        <button onClick={this.handleDecrement.bind(this)}>-</button>
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrement.bind(this)}>+</button>
    </div> );
  }
}

export default Counter;
