// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to print prime numbers from the 7 times table
function printPrimeNumbersFrom7Table(limit) {
    for (let i = 1; i <= limit; i++) {
        let multiple = 7 * i;
        if (isPrime(multiple)) {
            console.log(multiple);
        }
    }
}
printPrimeNumbersFrom7Table(10);