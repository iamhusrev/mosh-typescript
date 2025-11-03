//? TypeScirp is a kid with dicipline on the other hand JavaScript is a kid without dicipline

/*** Getting Started with TypeScript Compilation Instructions ***

For creating a tsconfig.json file use the command:
tsc --init
This will create a tsconfig.json file with default configurations.
You can modify the configurations as per your requirements.
To compile a TypeScript file, use the command:
tsc filename.ts
This will generate a JavaScript file with the same name in the same directory.
To compile all TypeScript files in a directory, simply run:
tsc
This will compile all .ts files in the directory based on the configurations in tsconfig.json.
*/

console.log("Hello, world!");

let age: number = 30;

if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}
