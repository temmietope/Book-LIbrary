import React from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'



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
