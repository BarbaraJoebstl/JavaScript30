const dogs = [{ name: 'Fix', age: 2 }, { name: 'Foxi', age: 3 }];
function doSomething() {
  const p = document.querySelector('p');
  p.style.color = 'blue';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', ':)');
// Styled
// console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
// warning!
console.warn('WARNING');
// Error :|
console.error('ABBRUCH! ABBRUCH!');
// Info
console.info('INFO');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains(':('), 'That is wrong!');
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
// Grouping together
dogs.forEach(dog => {
  //console.group() or
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('Fix');
console.count('Fix');
console.count('Fix');
console.count('Foxi');
console.count('Fix');
console.count('Foxi');
console.count('Fix');
console.count('Foxi');
console.count('Foxi');
console.count('Fix');
console.count('Foxi');
console.count('Fix');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/tschebee')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);
