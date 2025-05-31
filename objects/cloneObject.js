const user1 = {
  name: "John",
  age: 28,
};

// user spread Operator
const user2 = { ...user1 };

// Using Object.assgin
const user3 = Object.assign({}, user1);

console.log(user1, user2, user3, (user1 === user2) === user3);
