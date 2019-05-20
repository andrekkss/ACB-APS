import React, { useState } from 'react';
import Service from '../service/cadastro.service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CadastroScene = (props) => {
    const [ nome,  setNome ] = useState('');
    const [ senha, setSenha] = useState('');
    const [ email, setEmail] = useState('');
    const [ cpf,   setCpf]   = useState('');
    const [ endereco, setEnd]= useState('');
   
    const handleChange = state => event => {
        state(event.target.value);
    };

    const sendCadastro = () => {
      const data = { 
        cadastro: {
          Nome: nome,
          Senha: senha,
          Email: email,
          CPF: cpf,
          Endereco: endereco
        }
      }
      Service.postCadastro(data)
      .then(response => console.log(response))
      .catch(err =>  console.log(err));
    }

    return (
      <div>
      <div>
        <TextField
          id="outlined-name"
          label="Nome"
          value={nome}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange(setNome)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="password"
          value={senha}
          type='password'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange(setSenha)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Email"
          value={email}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange(setEmail)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="CPF"
          InputLabelProps={{
            shrink: true,
          }}
          value={cpf}
          onChange={handleChange(setCpf)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Endereço"
          value={endereco}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange(setEnd)}
          margin="normal"
          variant="outlined"
        />
        
      </div>  
        <Button size="small" onClick={sendCadastro}>
        Enviar
      </Button>
      <Button size="small" onClick={props.action}>
        Login
      </Button>
      </div>
    );
} 
export default CadastroScene;