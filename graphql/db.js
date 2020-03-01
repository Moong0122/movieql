export const people = [
  {
    id: "0",
    name: "jacob",
    age: 24,
    gender: "male"
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Nicolas",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Japan guy",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: "6",
    name: "moondaddi",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  //   console.log(id);
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
