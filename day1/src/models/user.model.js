import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema, 'users')

export default User
