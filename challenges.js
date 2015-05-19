// Challenge zero
// 
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

function addNumbers(numberA, numberB) {
    return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.assert(twoPlusTwo === 4)

// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string. 
// 
// An example:
// 
// letterCount("hello world")
// 
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
// 
// Note that the space is not counted. All 
// letters should also be converted to lower
// case when counting them.

function letterCount(input) {
    if (typeof input === 'string') {var arr = input.toLowerCase().replace(/[^a-zA-Z]/ig, '').split('')
    var counter = arr.reduce(function(a, v, i) {
        !a[v] ? a[v] = 1 : a[v]++
        return a
    }, {})
    return counter
} else {
	return {}
}

}

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)

// // write a function randomInRange(a,b)
// // that returns a random number between a and b

function randomInRange(a,b) {
	return (Math.random()*(Math.max(a,b)-Math.min(a,b)))+Math.min(a,b)
}

var x = randomInRange(5,100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25,30)
console.assert(y >= -25 && y <= 30)
