import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://shery:qwerty@localhost:27017/dockerday1?authSource=admin'
    )

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    console.log(`✅ Database Name: ${conn.connection.name}`)
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDB