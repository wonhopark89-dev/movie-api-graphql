import { people, getById } from "./db";

const resolvers = {
  Query: {
    // person : function() {
    //   return() => winn;
    // }
    //person: () => winn // this is short cut style

    people: () => people,
    person: (_, {id}) => getById(id)
  }
};

export default resolvers;
