import User from '../models/user.model.js'

// CREATE
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = await User.create({ name, email, password })

    res.status(201).json({
      success: true,
      data: user
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// READ ALL
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.json({
      success: true,
      data: users
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



