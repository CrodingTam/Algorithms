const ThirdTask = () => {
    //By listing the prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?
    const isPrime = (n: number) => {
        if (n <= 1 ) return false;
        if(n === 2) return true;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    } 
    
    const findMthPrime = (m: number) => {
        if ( m === 1) return 2;
        if ( m === 2) return 3;
        let prime = 3;
        let i = 2;
        while (i < m) {
            do {
                prime += 2;
            } while (!isPrime(prime))
            i++;
        }
        return prime;
    }

    console.log("The 10 001st prime number is:",findMthPrime(10001))
    return(
        <div></div>
    )
}

export default ThirdTask;