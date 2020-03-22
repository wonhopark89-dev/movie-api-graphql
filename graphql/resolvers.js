import { getMovies } from "./db2";

const resolvers = {
  Query: {
    // person : function() {
    //   return() => winn;
    // }
    //person: () => winn // this is short cut style

    movies: (_, {limit, rating}) => getMovies(limit, rating)
  }
};

export default resolvers;
