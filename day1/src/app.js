import express from 'express'
import router from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('🚀 Server is running...')
})

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'API working properly ✅'
  })
})

app.use('/api/v1/user', router)

export default app
