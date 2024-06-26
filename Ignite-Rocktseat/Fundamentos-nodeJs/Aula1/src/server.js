import  http from'node:http';  
import { Database } from './database';
import { json } from './middlewares/json.js'
// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuários no banck-end
// POST /users => Criar um usuário no back-end

// Stateful - Stateless

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Code

const database = new Database()

const server = http.createServer(async(req, res) => {
    const { method, url } = req

    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

try{
   req.body =JSON.parse(Buffer.concat(buffers).toString())
}catch{
    req.body = null
}


  
    if (method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res.end(JSON.stringify(users))
    }
  
    if (method === 'POST' && url === '/users') {
        const {name, email} = req.body
       const user ={
            id:1,
            name,
            email,
        }
        database.insert('users', user)
        return res.writeHead(201).end()
    }
  
    
    return res.writeHead(404).end()
})

server.listen(3333)