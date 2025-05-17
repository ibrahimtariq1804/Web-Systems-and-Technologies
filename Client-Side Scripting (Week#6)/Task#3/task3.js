// Array of objects
const people = [
    { name: "Ibrahim", age: 22 },
    { name: "Ashir", age: 20 },
    { name: "Tehseen", age: 25 },
    { name: "Abdullah", age: 21 }
  ];
  
  // Sort by name (alphabetically)
  people.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Sorted by name:");
  console.log(people);
  
  // Sort by age (numerically)
  people.sort((a, b) => a.age - b.age);
  console.log("Sorted by age:");
  console.log(people);
  