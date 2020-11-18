const express = require('express')
//Middleware
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express()

// mongoose.connect(
//   'mongodb+srv://temitope:gl0r10u51.mongodb@bookstore.z3kqh.mongodb.net/<dbname>?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
mongoose
  .connect(
    'mongodb+srv://temitope:gl0r10u51@bookstore.z3kqh.mongodb.net/graphql-books',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error: ', err.message))

mongoose.connection.once('open', () => {
  console.log('connected to mongoose')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)
app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
