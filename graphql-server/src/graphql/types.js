export default `
  interface Multimedia {
    title: String
  }

  type Book implements Multimedia {
    title: String,
    author: String
  }
  type Film implements Multimedia {
    title: String,
    director: String
  }
  
  input MultimediaInput {
    title: String!
  }
  
  type Query {
    books(title: String, author: String): [Book],
    films(title: String, director: String): [Film],
    multimedia: [Multimedia]
  }
  
  type Mutation {
    addBook(title: String!, author: String!): String,
    addFilm(title: String!, director: String!): String
  }
`;
