import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  
  handleLogin = (e) => {
    e.preventDefault();
    this.props.setLogIn(this.state.email, this.state.password);
  };
  
  both=(e)=>{
    {this.handleLogin(e)}
  
  }
  
  render() {
    return (
      <form className="container" name="login" onSubmit={this.both}>
        Demo email is joe@josephbeckcastro.com and password is P@ssw0rd
        <br></br>
Please copy and paste below
<br></br>
<br></br>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            
            onChange={(e) =>
              this.setState({
                email: e.target.value,
              })
            }
          />
        </p>
        <br></br>
        <p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            
            onChange={(e) =>
              this.setState({
                password: e.target.value,
              })
            }
          />
        </p>
        <br></br>
        <p>
          <button
            type="submit"
            disabled={!this.state.email && !this.state.password}
          >
            Login
          </button>
        </p>
      </form>
    );
  }
}
