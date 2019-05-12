import React from 'react';
import axios from 'axios';

let valid = {};
const loginStore = async (values) => {
    const resp = authentic(values.user, values.password)
    .then(resp => {return resp })
    .catch(err => console.log(err));
    if(resp.on){
        valid = {
            user: values.user,
            online: resp.on
        }
    }else{
        valid = {
            user: values.user,
            online: resp.on
        }
    }
    await localStorage.setItem(values.user, valid);
    return resp.on;
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