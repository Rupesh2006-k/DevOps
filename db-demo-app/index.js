const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/dockerLearing')
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log('MongoDB connection error:', error.message))

// Create a Mongoose model
const Email = mongoose.model('Email', {
  email: String
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/add-email', async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      })
    }

    const existing = await Email.findOne({ email })
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      })
    }

    const newEmail = new Email({ email })
    await newEmail.save()

    res.status(201).json({
      success: true,
      message: 'Email saved successfully',
      data: newEmail
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    })
  }
})

app.get('/emails', async (req, res) => {
  try {
    const emails = await Email.find({})
    res.json(emails)
  } catch (error) {
    res.status(500).send('Error fetching emails')
  }
})

app.get('/exit', (req, res) => {
  res.send('Server stopped')
  process.exit(0)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
