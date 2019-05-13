import React, { Component } from 'react';
import Chat from './component/chat';
import CenteredTabs from './component/tab';
import SimpleAppBar from './component/bar';
import logo from './logo.svg';
import './App.css';
import './Cadastro.css'

import { Input } from 'semantic-ui-react';
import Cadastro from './scenes/cadastro';

import local from './service/local.store';

class App extends Component {
  state = {
    user: ''
  }
  handleChange =  (event) => { console.log(event.target.value) || this.setState({ user: event.target.value }) }

  componentDidMount(){
    const values = { user: 'anddre', password: 'ads'} 
    local(values).then(resp => console.log('dsadas ' + JSON.stringify(resp))).catch(err => console.log(err)); 

    const test = localStorage.getItem(values.user);

    console.log(test);
  }

  render() {
    return (
      <div className="App">

        <SimpleAppBar/>
        <CenteredTabs/>
        <header className="App-header">

        {/* <div class="login-wrap"> }
          <h2>Login</h2>
          
          <div class="form">
            <input type="text" placeholder="Username" name="un" />
            <input type="password" placeholder="Password" name="pw" />
            <button> Sign in </button>
            <a href="#"> <p> Don't have an account? Register </p></a>
          </div>
        </div> */}
      <Input 
        placeholder='Entre com o usuario'
        onChange={this.handleChange.bind(this)}
      />

      <Cadastro/>
      <Chat user={this.state.user}/>
      </header>
      </div>
    );
  }
}

export default App;
