let movies = [
  {
    id: 0,
    name: "nico",
    score: 22
  },
  {
    id: 1,
    name: "winn",
    score: 333
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterdMovies = movies.filter(movie => moive.id === id);
  return filterdMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
