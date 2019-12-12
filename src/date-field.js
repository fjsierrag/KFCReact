import React, { Component } from 'react';
import flatpicker from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

class DateField extends Component {
  el = React.createRef();
  state = {  }

  componentDidMount(){
    const node = this.el.current;
    if(node){
      flatpicker(node,{});
    }

  }

  render() {
    return (
      <input ref={this.el}></input>

     );
  }
}

export default DateField;
