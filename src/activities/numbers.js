// Refer here for style guide
// https://google.github.io/styleguide/jsguide.html
//

/*
* This function will check if the number is prime or not
* @param {int} number - The positive number
* @return {bool} whether the number is prime or not
*/
function isPrime(number) {
    for(let index=2; index<number; index++) {
        const remainder = number%index;
        if (remainder === 0) {
            return false;
        }
    }
    return true;
}

// function test_isPrime() {
//     console.log(isPrime(7));
//     console.log(isPrime(8));
// }

// test_isPrime();
