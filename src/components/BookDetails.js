import React from 'react'
import { useQuery } from '@apollo/client'
import { getBookQuery } from '../queries/queries'

const BookDetails = (props) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: props.bookId },
  })

  //   console.log(props, data)
  const displayBookDetails = () => {
    console.log(data)
    const { book } = data
    console.log(book)
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this auth</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return <div>No book selected...</div>
    }
  }

  //   console.log(props)
  //   const displayBooks = () => {
  //     if (loading) {
  //       return <p>Loading books</p>
  //     } else {
  //       return data.books.map((book) => {
  //         return <li key={book.id}>{book.name}</li>
  //       })
  //     }
  //   }
  //   console.log(data)
  //   if (loading) return <p>Loading</p>
  //   if (error) return <p>Ooops! Something went wrong</p>
  return (
    <div>
      <ul id="book-details">{data && displayBookDetails()}</ul>
    </div>
  )
}

export default BookDetails
