import axios from 'axios';

const endPoint =  'http://localhost:3001/cadastro';

const postCadastro = async ( data ) => {
    try{
      return await axios.post(endPoint, data)
    }catch(err){
      return err;
    }
}

const cadastroService = {
    postCadastro
} 

export default cadastroService;