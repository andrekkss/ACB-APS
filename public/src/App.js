import React, { Component } from 'react';
import Chat from './component/chat';
import logo from './logo.svg';
import './App.css';

import { Input } from 'semantic-ui-react';
import Cadastro from './scenes/cadastro';

class App extends Component {
  state = {
    user: ''
  }
  handleChange =  (event) => { console.log(event.target.value) || this.setState({ user: event.target.value }) }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input
            placeholder='Entre com o usuário'
            onChange={this.handleChange.bind(this)}
          />

          <Cadastro /> 
          <Chat user={this.state.user}/>

        </header>
      </div>
    );
  }
}

export default App;
