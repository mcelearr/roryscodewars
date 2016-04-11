var primes = [2,3,5,7,11,13,17,19,23,29,31];

//exercise
//write a function which takes a parameter n
//and returns an array of primes up to n

function isPrime(n){
  //get rid of 2 and 3
  if (n == 2 || n == 3) return true;

  //get rid of numbers smaller than 2 or not integers
  if (n < 2 || n % 1 !== 0) return false;

  //find the square root of n rounded up
  var square = Math.ceil(Math.sqrt(n));

  //get rid of all the numbers divisible by 2 and 3
  if (n % (2) == 0 || n % (3) == 0) return false;

  //which means you can filter by 1 either side of 6
  for (var i = 6; i < Math.ceil(Math.sqrt(n)); i += 6){
    if (n % (i+1) == 0 || n % (i-1) == 0) return false;
  }
  return true;
}

console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(-1) === false);
console.log(isPrime(-7) === false);
console.log(isPrime(8.5) === false);
console.log(isPrime(11) === true);
console.log(isPrime(12) === false);
console.log(isPrime(91) === false);
console.log(isPrime(47) === true);
console.log(isPrime(17) === true);
