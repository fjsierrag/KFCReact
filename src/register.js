import React, { Component } from 'react';

export default  class Register extends Component {
  state={
    firstName:"Nombre",
    lastName:"Apellido",
  };

  handleChange =(e)=>{
    const target=e.target;
    const name=target.name;
    const value=target.value;
    this.setState({[name]:value});
  }
  render(){
    return(
        <form>
          <fieldset>
            <legend>General</legend>
            <div>
              <label>First Name: </label>
              <input
                  name={"FirstName"}
                  value={this.state.firstName}
                  onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Last Name: </label>
              <input
                  name={"LastName"}
                  value={this.state.lastName}
                  onChange={this.handleChange}
              />
            </div>
          </fieldset>
        </form>
    );
  }
}

