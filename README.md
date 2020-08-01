# Learning GraphQL

```
yarn start
```
> localhost:4000

```
query {
  movies(limit:10, rating:5.0) {
    title
    rating
    summary
  }
}
```