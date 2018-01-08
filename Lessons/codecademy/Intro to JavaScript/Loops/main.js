let thingsToDo = ['do laundry', 'take out the garbage', 'make dinner', 'walk the dog', 'go to the bank'];

for (let thingsToDoIndex = thingsToDo.length - 1; thingsToDoIndex >= 0; thingsToDoIndex--) {
  console.log('I need to ' + thingsToDo[thingsToDoIndex] + '.');
}

while (thingsToDo.length > 3) {
  console.log('I have too many things to do!');
  thingsToDo.pop();
 }