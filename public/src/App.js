import React, { Component } from 'react';
import Chat from './component/chat/chat';
import Login from './component/login/login';
import './App.css';

import GoogleMapReact from 'google-map-react';

import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudRain, faSnowflake, faCloudSun, faCloudSunRain} from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@material-ui/core/Tooltip';

const AnyReactComponent = ({value}) =>  <Tooltip title={<React.Fragment>
  Cidade: {value.cidade} <br /> 
  Descricao: {value.descricao}<br /> 
  Grau: {value.graus}<br /> 
  temp: {value.temp}<br /> 
  pressao do ar: {value.pressao}<br /> 
</React.Fragment>}><div>{list[value.temp]}</div></Tooltip>;

 

const list = {
  Clouds:   <FontAwesomeIcon icon={faCloud}  color="#9FF5F7"/>,
  Drizzle:  <FontAwesomeIcon icon={faCloudSunRain}  color="#A7ACAC"/>,
  Rain:     <FontAwesomeIcon icon={faCloudRain}  color="#1482F0"/>,
  Snow:     <FontAwesomeIcon icon={faSnowflake}  color="#74AFEB"/>,
  Clear:    <FontAwesomeIcon icon={faCloudSun}  color="#B2BD00"/>,
}

class App extends Component {
  state = {
    user: '',
    dados: { data: {} },
    open: true
  }
  
  static defaultProps = {
    center: {
      lat: -14.23,
      lng: -51.92
    },
    zoom: 4
  };

  async componentDidMount(){
    await Axios.get(`http://${process.env.REACT_APP_IP }:3001/getAllClima`).then(values => this.setState({ dados: values.data})).catch(err =>  console.log(err));

  }

  render() {
    return (
      <div>
        <Login open={this.state.open} />
        <div className="mainContainer">
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
                    value={{
                      temp: values.Clima,
                      cidade: values.Cidade,
                      descricao: values.Descricao,
                      graus: values.temperatura,
                      pressao: values.pressao
                    }
                  }
                  />
                );
              })}
            </GoogleMapReact>
          </div>
        </div>
        <Chat user={this.state.user}/>
      </div>
    );
  }
}

export default App;
