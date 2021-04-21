// Indicate the types of the tuple
var array: [number, number] = [1, 2];

// Add number types
array.push(3);
array.push(4);



// Create a type and add attributes to the type
// ? --> optional attribute, no need to be included 
type Person = {
    name: string;
    age?: number;
};

// Create  a const with the type that we just have created
const person: Person = {
    name: 'Jane',
    age: 30,
};

const personTwo: Person = {
    name: 'David',
};