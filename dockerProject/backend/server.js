import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { YSocketIO } from 'y-socket.io/dist/server'

const app = express()
app.use(express.static('public'))
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

const ySocketIo = new YSocketIO(io)
ySocketIo.initialize()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello world',
    success: true
  })
})

app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'ok , server is runing',
    success: true
  })
})

httpServer.listen(3000, () => {
  console.log('server is runing on port 3000')
})
