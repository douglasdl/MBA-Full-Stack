import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')  
      .end(JSON.stringify(users))
  }
  
  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Douglas Dias Leal',
      email: 'douglas_san@hotmail.com'
    })

    return response.end('Creating users')
  }

  return response.end('Hello World')
})

server.listen(3333)