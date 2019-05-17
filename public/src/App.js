import React, { Component } from 'react';
import Chat from './component/chat/chat';
import CenteredTabs from './component/tab/tab';
import SimpleAppBar from './component/bar/bar';
import './App.css';

import { Input } from 'semantic-ui-react';
import Cadastro from './scenes/cadastro';
import Login from './component/login/login';

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
      <div>
        <SimpleAppBar/>
        <CenteredTabs/>

        <div className="mainContainer">
          {/* <Login/> */}
          <Input 
          placeholder='Entre com o usuario'
          onChange={this.handleChange.bind(this)}
          />

        {/* <Cadastro/> */}
        
        </div>
        <Chat user={this.state.user}/>
      </div>
    );
  }
}

export default App;
