import { addMovie, getById, getMovies } from "../db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => {
      //첫번째 인자는 무슨 object라는데 쓸모는 없다고 함
      return getById(id);
    },
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;
