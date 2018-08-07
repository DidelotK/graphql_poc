# Graphql poc

This repo is a poc to better understand what GRAPHQL is, and how it can be used
to make APIs.

In this poc it has been decided to make the GRAPHQL api in express (nodejs) for its speed of implementation.
For the front part the Vuejs framework has been privileged. Not having too much time to test it
in the past, I wanted to discover it via this poc.

## Run all (production mode)

```bash
docker-compose -f docker-compose.yml -f docker-compose.with-graphql-server.yml -f docker-compose.with-webapp.yml
```

## Test the api via graphiql

```bash
docker-compose -f docker-compose.yml -f docker-compose.with-graphql-server-dev.yml -f docker-compose.with-webapp.yml
```

It is possible to test the API in dev mode thanks to an endpoint provided for this purpose http://<api-uri>:<api-port>/graghiql

### Mutation
```graphql
mutation {
  addBook(title: "Foundation", author: "Isaac Asimov")
}
```


### Query
```graphql
query {
  multimedia {
    title
    ... on Book {
      author
    }
    
    ... on Film {
      director
    }
  }
}
```
