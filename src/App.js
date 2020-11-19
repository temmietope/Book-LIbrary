import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import BookList from './components/BookList'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>My Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  )
}

export default App
