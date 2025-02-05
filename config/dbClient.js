const { MongoClient } = require('mongodb');

class dbClient {

    constructor(){
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=pruebatecnica`;
        this.client = new MongoClient(queryString)
        this.connectBD();
    }

    async connectBD(){
        try {
            await this.client.connect();
            this.db = this.client.db('usuarios');
            console.log("Conectado al servidor de base de datos");

        } catch (e) {
            console.log(e);   
        }
    }
}

module.exports = new dbClient