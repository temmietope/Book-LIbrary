import { gql, useQuery } from '@apollo/client'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

export { getAuthorsQuery, getBooksQuery }
