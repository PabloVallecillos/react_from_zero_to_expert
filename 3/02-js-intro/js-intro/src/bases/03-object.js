const person = {
  name: 'John',
  lastName: 'Doe',
  age: 25
};
// a reference from memory is created, not a copy,
// so if we change the value of person2, the value of person will also change
const person2 = person;
person2.age = 26;
console.log(person);
console.log(person2);

// use spread operator to create a copy of the object
const person3 = { ...person, age: 27 };
console.log(person3);