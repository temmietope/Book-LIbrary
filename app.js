const express = require('express')
const dotenv = require('dotenv')
//Middleware
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express()
dotenv.config({ path: '.env' })

mongoose
  .connect(process.env.REACT_APP_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
