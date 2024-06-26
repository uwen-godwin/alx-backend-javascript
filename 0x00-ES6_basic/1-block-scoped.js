export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let for block scope
  let task2 = true; // Changed var to let for block scope

  if (trueOrFalse) {
    task = true; // Updated without redeclaring with let
    task2 = false; // Updated without redeclaring with let
  }

  return [task, task2];
}
