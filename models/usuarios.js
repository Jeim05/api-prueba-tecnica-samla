const { ObjectId } = require('mongodb');
const dbClient = require('../config/dbClient')

class UsuarioModelo{

    async create(usuario){
      const collectionUsuarios = dbClient.db.collection('usuarios');
      return await collectionUsuarios.insertOne(usuario)  
    }

    async getAll(){
        const collectionUsuarios = dbClient.db.collection('usuarios')
        return await collectionUsuarios.find({}).toArray()
    }

    async getOne(id){
        const collectionUsuarios = dbClient.db.collection('usuarios')
        return await collectionUsuarios.findOne({_id:new ObjectId(id)}) 
    }
}

module.exports = new UsuarioModelo