import app from './src/app.js'
// import connectDB from './src/db/connectDB.js'
;(async () => {
  // await connectDB()
  app.listen(3000, () => {
    console.log('Server running on port hello dosto from the shery 3000')
  })
})()
