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
        <TextField
          id="outlined-name"
          label="Nome"
          value={nome}
          onChange={handleChange(setNome)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="password"
          value={senha}
          type='password'
          onChange={handleChange(setSenha)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Email"
          value={email}
          onChange={handleChange(setEmail)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="CPF"
          value={cpf}
          onChange={handleChange(setCpf)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Endereço"
          value={endereco}
          onChange={handleChange(setEnd)}
          margin="normal"
          variant="outlined"
        />
        <Button size="small" onClick={sendCadastro}>
          Enviar
        </Button>
      </div>  
    );
} 
export default CadastroScene;