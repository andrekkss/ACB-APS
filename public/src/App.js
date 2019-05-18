import React, { Component } from 'react';
import Chat from './component/chat/chat';
import CenteredTabs from './component/tab/tab';
import SimpleAppBar from './component/bar/bar';
import './App.css';

import GoogleMapReact from 'google-map-react';

import { Input } from 'semantic-ui-react';
import Cadastro from './scenes/cadastro';
import Login from './component/login/login';

import local from './service/local.store';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class App extends Component {
  state = {
    user: ''
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 5
  };

  handleChange =  (event) => { console.log(event.target.value) || this.setState({ user: event.target.value }) }

  componentDidMount(){
    const values = { user: 'anddre', password: 'AIzaSyCY6fx5zZF6FSoDM9dpaOfN15HqNGPZyGo'} 
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
          {/* <Input 
          placeholder='Entre com o usuario'
          onChange={this.handleChange.bind(this)}
          /> */}
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCY6fx5zZF6FSoDM9dpaOfN15HqNGPZyGo' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        {/* <Cadastro/> */}
        </div>
        
        <Chat user={this.state.user}/>
      </div>
    );
  }
}

export default App;
