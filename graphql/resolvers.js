const winn = {
  name: "winn",
  age: 32,
  gender: "male"
};

const resolvers = {
  Query: {
    // person : function() {
    //   return() => winn;
    // }
    person: () => winn // this is short cut style
  }
};

export default resolvers;
