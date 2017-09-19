import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleInputChange = (event) =>{
    // console.log(event.target.value)
    // console.log(event.target.name)
    // const name = event.target.name
    // console.log(this.state[event.target.name])
    this.setState({
      [event.target.name]: event.target.value

    })

  }

  handleSubmit = (event) =>{
    event.preventDefault();
    // console.log(event)
    const username = this.state.username
    const password = this.state.password
    console.log(username)
    console.log(password)
    if(!username || !password){
      return
    }
    this.props.onSubmit({username, password})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange}  />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
