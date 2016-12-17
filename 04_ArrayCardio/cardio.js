
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
  // const fifteen = inventors.filter({
  //   if(inventor.year >= 1500 && inventor.year < 1600) {
  //     return true;
  //   }
  // });
  // shorter way
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
  // logs data as a table
console.table(fifteen);

//Array.prototype.map()
//map takes an array, does whatever and returns a new array, returns always the same amount of items
const fullNames = inventors.map(inventor => `${inventor.first}` + `${inventor.last}`)
console.log(fullNames);

//Array.prototype.sort (long version)
// const ordered = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//one liner
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );
console.table(ordered);

//Array.protoype.reduce()
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

const oldes = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGey = b.passed - b.year;
  return lastGuy > nextGey ?  -1 : 1;
});
console.table(oldest);

//grab data from wiki page
//query selector always returns a node list

//RUN THIS CODE DIRECTLY ON WIKI PAGE
// const category = document.querySelector('.mw-category');
// //transform node list to array
// const links = Array.from(category.querySelectorAll('a');
//
// const de = links
//             .map(link => link.textContent);
//             .filter(streetName => streetName.includes('de'));

//sort by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [alast, afirst] = lastOne.split(', ');
  const [blast, bfirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

//reduce exersice
//sum up instances
const data = ['car', 'truck', 'car', 'van', 'bike', 'bike', 'van', 'van'];

const transportation = data.reduce(function(obj, item){
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
