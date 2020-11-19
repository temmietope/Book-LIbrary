import React from 'react'
import { useQuery } from '@apollo/client'
import { getAuthorsQuery } from '../queries/queries'



const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery)

  const displayAuthors = () => {
    if (loading) {
      return <p>Loading authors</p>
    } else {
      return data.authors.map((author) => {
        return <option key={author.id}>{author.name}</option>
      })
    }
  }
  console.log(data)
  if (loading) return <p>Loading</p>
  if (error) return <p>Ooops! Something went wrong</p>
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
