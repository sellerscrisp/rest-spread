/*

Refactor using rest operator and arrow function

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

*/

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0)

// findMin
const findMin = (...arguments) => Math.min(...arguments)

// mergeObjects
const mergeObjects = (object1, object2) => ({ ...object1, ...object2 })

//
