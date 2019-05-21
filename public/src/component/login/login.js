import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import local from '../../service/local.store';
import Button from '@material-ui/core/Button';
import Cadastro from '../../scenes/cadastro';
import Snack from '../snackbar/snackbar';

const styles = theme => ({
  paper: {
    position: 'absolute',
    left:'47%',
    top:'40%',
    margin:'-200px',
    width: theme.spacing.unit * 50,
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    //outline: 'none',
  },
});

class SimpleModal extends React.Component {
  state = {
    login: '',
    password: '',
    local: false,
    open: true,
    cadastro: false,
    snack: false,
    msg: ''
  }

  async componentDidMount(){
    let keys = Object.keys(localStorage),
    i = keys.length, valid = false;

    while ( i-- ) {
        let resp = localStorage.getItem(keys[i]);
        let on   = JSON.parse(resp);
        if(on.online == true){
          valid = on.online;
          break;
        }
    }
    if(valid) this.setState({ open: false, local: true });
  };

  handleLogin=async()=>{
    const values = { user: this.state.login, password: this.state.password };
    await local(values); 

    const resp = localStorage.getItem(values.user);
    const validation = JSON.parse(resp);
    if(validation.online == true){
      this.setState({ open: false, local: true, snack: true, msg: validation.msg });
      setTimeout(
        function() {
            this.setState({ snack: false });
        }.bind(this),
        2500
    )
    }else{
      this.setState({ snack: true, msg: validation.msg });
      setTimeout(
        function() {
            this.setState({ snack: false });
        }.bind(this),
        2500)
    }
  }
  
  handleCadastro=()=>{
    this.setState({ cadastro: !this.state.cadastro });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const authentic = this.state.local == false ? this.props.open : this.state.open;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={authentic}
        >
          <div className={classes.paper}>
            {!this.state.cadastro ?
              <div> <TextField
                id="outlined-email-input"
                label="Login"
                name="user"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.state.login}
                onChange={this.handleChange('login')}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
              <div>
                <Button onClick={this.handleLogin}>Login</Button>
                <Button onClick={this.handleCadastro}>Cadastrar</Button>
                <SimpleModalWrapped />
              </div> 
              </div>
              : 
              <Cadastro action={this.handleCadastro}/>
            }
          </div>
        </Modal>
        {this.state.snack &&
         <Snack msg={this.state.msg}/>
        }
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
