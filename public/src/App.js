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
import Axios from 'axios';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class App extends Component {
  state = {
    user: '',
    dados: { data: {} }  
  }
  
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 5
  };

  handleChange =  (event) => { console.log(event.target.value) || this.setState({ user: event.target.value }) }

  async componentDidMount(){
    //const values = { user: 'anddre', password: 'AIzaSyCY6fx5zZF6FSoDM9dpaOfN15HqNGPZyGo'} 
    //local(values).then(resp => console.log('dsadas ' + JSON.stringify(resp))).catch(err => console.log(err)); 

    //const test = localStorage.getItem(values.user);

    await Axios.get('http://localhost:3001/getAllClima').then(values => this.setState({ dados: values.data})).catch(err =>  console.log(err));
  }

  render() {
    console.log(JSON.stringify(this.state.dados));
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
              {Object.values(this.state.dados.data).map(values => {
                return(
                  <AnyReactComponent
                    lat={values.Cordenadas.lat}
                    lng={values.Cordenadas.lon}
                    text={values.Cidade}
                  />
                );
              })}
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
