// Este arquivo ira gerenciar todas as requisições para o servidor
//
//1 - Primeiro estruturar o context para que ele possa receber os dados por este arquivo
//2 - Implementar um classe estatica(exemplo JAVA) onde vai conter funções async
//3 - Ela deve receber alguns parametros para que possa enviar pro back-end por exemplo: 'Qual a requisição?' - 'Banco de dados'
//    'Chat', 'Pesquisa' e etc
//
//
//exemplo de função async
//    static storeData = async (key, data) => {
//        try {
//            return await AsyncStorage.setItem(key,  JSON.stringify(data));
//        } catch (err) {
//            return err;
//        }
//    }
//
//no caso adaptala para o socket-IO