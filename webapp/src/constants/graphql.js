import gql from 'graphql-tag';

export const GRAPHQL_URI = 'http://localhost:3000/graphql';

export const GET_FILMS = gql`
query {
  films {
    title,
    director
  }
}
`;

export const ADD_FILM = gql`
mutation AddFilmMutation($title: String!, $director: String!) {
  addFilm(title: $title, director: $director)
}`;
