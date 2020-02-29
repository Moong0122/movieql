const jacob = {
  name: "jacob",
  age: 24,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => jacob
  }
};

export default resolvers;
