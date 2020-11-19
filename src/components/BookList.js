import React from 'react'
import { gql, useQuery } from '@apollo/client'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery)

  const displayBooks = () => {
    if (loading) {
      return <p>Loading books</p>
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>
      })
    }
  }
  console.log(data)
  if (loading) return <p>Loading</p>
  if (error) return <p>Ooops! Something went wrong</p>
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  )
}

export default BookList
