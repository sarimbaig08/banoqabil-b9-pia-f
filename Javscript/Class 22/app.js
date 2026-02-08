// console.log("working");

// let names = ["John", "Jane", "Doe", "Smith"];
// let copyOfNames = [...names]; // This creates a shallow copy of the array using the spread operator
// let copyOfNames = names; // This creates a reference to the same array, not a copy

// names.push("Alice");
// names.pop();
// names.unshift("Bob");
// names.shift();
// let selectedNames = names.slice();

// console.log("old array", names);
// console.log("new array", selectedNames);

// copyOfNames.splice(1, 1, "emily", "michael", "sarah");
// console.log("copyOfNames", copyOfNames);
// console.log("names", names);

// let name = "sarim";
// let copyOfName = name; // This creates a copy of the string, not a reference

// copyOfName = "john"; // Modifying copyOfName does not affect name
// console.log("name", name);
// console.log("copyOfName", copyOfName);

const fruits = ["apple", "banana", "cherry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((fruit, index) => {
  console.log(` ${index}`);
  console.log(`I like ${fruit}`);
});

fruits.map((fruit, index) => {
  console.log(` ${index}`);
  console.log(`map ${fruit}`);
});
