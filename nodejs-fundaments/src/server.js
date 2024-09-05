import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// Query Parameters: URL stateful => filter, pagination, optional info
//   http://localhost:3333/users?userId=1&name=Douglas

// Route Parameters: resource identification
//   GET    http://localhost:3333/users/1

// DELETE http://localhost:3333/users/1
// Request Body: send form info (HTTPS)
// POST   http://localhost:3333/users

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  const route = routes.find(route => {
    return route.method === method && route.path === url
  })

  if(route) {
    return route.handler(request, response)
  }

  return response.writeHead(404).end()
})

server.listen(3333)