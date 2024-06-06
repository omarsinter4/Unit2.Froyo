const userInputString = prompt(
  "What Froyo flavors:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");

const Froyor = {};
for (const flavors of stringArray) {
  Froyor[flavors] = (Froyor[flavors] || 0) + 1;
}

console.table(Froyor);
