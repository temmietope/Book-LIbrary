import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries'

const AddBook = () => {
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: '',
  })

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }

  const [addBookMut, { dataMutation }] = useMutation(addBookMutation)

  const onSubmit = (e) => {
    e.preventDefault()
    addBookMut({
      variables: {
        name: book.name,
        genre: book.genre,
        authorId: book.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    })
  }

  const { loading, error, data } = useQuery(getAuthorsQuery)

  const displayAuthors = () => {
    if (loading) {
      return <p>Loading authors</p>
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
    }
  }
  console.log(data)
  if (loading) return <p>Loading</p>
  if (error) return <p>Ooops! Something went wrong</p>
  return (
    <form id="add-book" onSubmit={onSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={onChange} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={onChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={onChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
