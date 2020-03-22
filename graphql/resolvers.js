import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    // person : function() {
    //   return() => winn;
    // }
    //person: () => winn // this is short cut style

    movies: () => getMovies(),
    movie: (_, {id}) => getById(id)
  },

  Mutation : {
    addMovie : (_, { name, score}) => addMovie(name,score)
  }
};

export default resolvers;
