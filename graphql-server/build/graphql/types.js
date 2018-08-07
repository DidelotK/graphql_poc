"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  interface Multimedia {\n    title: String\n  }\n\n  type Book implements Multimedia {\n    title: String,\n    author: String\n  }\n  type Film implements Multimedia {\n    title: String,\n    director: String\n  }\n  \n  input MultimediaInput {\n    title: String!\n  }\n  \n  type Query {\n    books(title: String, author: String): [Book],\n    films(title: String, director: String): [Film],\n    multimedia: [Multimedia]\n  }\n  \n  type Mutation {\n    addBook(title: String!, author: String!): String,\n    addFilm(title: String!, director: String!): String\n  }\n";
//# sourceMappingURL=types.js.map