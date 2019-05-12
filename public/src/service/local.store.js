import axios from 'axios';

let valid = {};
const loginStore = async (values) => {
    const resp = await authentic(values.user, values.password)
    .then(resp => { return resp.data })
    .catch(err => console.log(err));
    if(resp.on){
        valid = {
            user: values.user,
            online: resp.on,
            msg: resp.message
        }
    }else{
        valid = {
            user: values.user,
            online: resp.on,
            msg: resp.message
        }
    }
    await localStorage.setItem(values.user, valid);
    return valid;
}

const authentic = async (user, password) => {
    const endPoint = `http://localhost:3001/login?user=${user}&password=${password}`;
    try{
       return await axios.get(endPoint);
    }catch(err){
       return err;
    }
}

const disconnect = async (user) => {
   const store = localStorage.getItem(user);
   if(!store.on){
      await localStorage.clear();
   }else{
      return 'nenhum usuário online';
   }
} 

export default loginStore;