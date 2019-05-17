import React, { Component } from 'react';


class Login extends Component{
    state={
        user:'',
        senha:'',
    }

    handleChange =  (event) => { console.log(event.target.value) || this.setState({ user: event.target.value }) }

    render(){
        return(
        <div> 
          <h2>Login</h2>
          
          <div >
            <input type="text" placeholder="Username" name="un" />
            <input type="password" placeholder="Password" name="pw" />
            <button> Sign in </button>
            <a href="#"> <p> Don't have an account? Register </p></a>
          </div>
        </div>
        )
    }
}

export default Login;
