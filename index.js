const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Main</title></head>')
    res.write(
      '<body><a href="http://localhost:4000/home">Home</a><br><a href="http://localhost:4000/node">Node</a><br><a href="http://localhost:4000/about">About</a></body>'
    )
    res.write('</html>')
    return res.end()
  }
  if (url === '/node') {
    res.write('<html>')
    res.write('<head><title>Main</title></head>')
    res.write('<body><h1>Welcome to my Node js Project</h1></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/home') {
    res.write('<html>')
    res.write('<head><title>Home</title></head>')
    res.write('<body><h1>Welcome to Home</h1></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/about') {
    res.write('<html>')
    res.write('<head><title>Main</title></head>')
    res.write('<body><h1>Welcome to About us Page</h1></body>')
    res.write('</html>')
    return res.end()
  }
})

server.listen(4000)
