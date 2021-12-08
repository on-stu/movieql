import { getById, people } from "../db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      //첫번째 인자는 무슨 object라는데 쓸모는 없다고 함
      return getById(id);
    },
  },
};

export default resolvers;
