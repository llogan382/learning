import { useState, useContext, createContext } from "react";

// const UserContext = createContext([
//   {
//     firstName: "Bob",
//     lastName: "Bobberson",
//     suffix: 1,
//     email: "bobbobberson@example.com",
//   },
//   (obj) => obj,
// ]);

  const user = {
    user1: {
      firstName: "James",
      lastName: "Jameson",
      suffix: 1,
      email: "jamesjameson@example.com"
    },
  };
  const Lvl1User = createContext(user.user1);

const ContextComponent = () => {
  return (
    <Lvl1User.Provider value={user.user1}>
      <h1>first level</h1>
      <LevelTwo />
    </Lvl1User.Provider>
  );
};




const LevelTwo = () => (
  <div>
    <h2>second level</h2>
    <LevelThree />
  </div>
);
const LevelThree = () => (
  <div>
    <h3>third level</h3>
    <LevelFour />
  </div>
);

const LevelFour = () => (
  <div>
    <h4>fourth level</h4>
    <LevelFive />
  </div>
);

const LevelFive = () => {
  const user = useContext(Lvl1User);

  return (
    <div>
      <p>Hi there</p>
      <p>{user.firstName}</p>
    </div>
  );
};


export default ContextComponent;
