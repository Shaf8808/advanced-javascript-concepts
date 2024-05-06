function greetUser(greeting, name = "user") {
  console.log(`Hi ${greeting}, the ${name} is currently out `);
}

greetUser("Mark");

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

const listOfNumbers = [1, 2, 3, 5];

console.log(sumUp(...listOfNumbers));
