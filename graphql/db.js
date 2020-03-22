export const people = [
  {
    id: "0",
    name: "nico",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "winn",
    age: 32,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
