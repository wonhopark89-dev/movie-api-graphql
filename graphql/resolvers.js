import { getMovies, getMovie, getSuggestion } from "./db2";

const resolvers = {
  Query: {
    // person : function() {
    //   return() => winn;
    // }
    //person: () => winn // this is short cut style

    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestion(id)
  }
};

export default resolvers;
