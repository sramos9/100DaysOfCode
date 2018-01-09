// console.log('day one... setup');
//
// const orphan = {}
//
// const dog = {
//   name: "Gizmo",
//   age: 1,
//   breed: "doodle"
// }
//
// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.breed);

const celebrity = {
  name: "Trump",
  age: 55,
  isCurrentlyTweeting: true
}

console.log(celebrity);
console.log(celebrity.name);
console.log(celebrity.age);
console.log(celebrity.isCurrentlyTweeting);

const Twitter = ()=> {
  if(celebrity.isCurrentlyTweeting === true){
    console.log('Turn off Twitter');
  }
}

Twitter();
