import http from 'node:http'

const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === 'GET' && url === '/users') {
    return response.end('Listing users')
  }
  
  if(method === 'POST' && url === '/users') {
    return response.end('Creating users')
  }

  return response.end('Hello World')
})

server.listen(3333)