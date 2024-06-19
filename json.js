// JSON
// JavaScript object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthData: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key  === 'name' ? 'ellie' : value; 
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.log('-----------------------------------------------');

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);


const obj2 = {
    name: "홍길동",
    age: 25,
    married: false,
    family: {
      father: "홍판서",
      mother: "춘섬",
    },
    hobbies: ["독서", "도술"],
    jobs: null,
  };
  const str2 = JSON.stringify(obj2, null, 2);
  console.log(str2);

  fetch("https://jsonplaceholder.typicode.com/posts/1").then((Response) => console.log(Response));

  const numbers = [1, 2, 3, 4, 5];
  const letters = ["A", "B", "C"];
  const concat = letters.concat(numbers);
  json = JSON.stringify(concat);
  console.log(json);