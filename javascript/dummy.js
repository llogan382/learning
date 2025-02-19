function userCreator (name, score){
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function(){ this.score++; },
  login: function(){ console.log("You're loggedin"); }
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();