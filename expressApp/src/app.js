import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World 🚀')
})

app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'API working fine'
  })
})
// 🔴 STOP SERVER ROUTE
app.get('/stop', (req, res) => {
  res.json({
    success: true,
    message: 'Server is stopping...'
  })

  // delay taki response send ho jaye
  setTimeout(() => {
    console.log('Server stopped by /stop route')
    process.exit(0) // server band
  }, 1000)
})

export default app
