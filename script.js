const boom7 = () => {
    let min = document.getElementById("min").value;
    let max = document.getElementById('max').value;
    let myPromise = generate7BoomAfterDelayAsync(min, max);

    myPromise
        .then((rnd) => { alert("BOOM!") })
        .catch((rnd) => { console.log("try again!") });

}



const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            console.log(randomNumber);
            if (randomNumber % 10 === 7 || randomNumber % 7 === 0) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
}



//using async-await
const boom7async = async() => {
    let min = document.getElementById("minimum").value;
    let max = document.getElementById('maximum').value;

    try {
        let myPromise = await generate7BoomAfterDelayAsyncAwait(min, max);
        alert("BOOM!")
    } catch {
        console.log("try again!")
    }
}

const generate7BoomAfterDelayAsyncAwait = (min, max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            console.log(randomNumber);
            if (randomNumber % 10 === 7 || randomNumber % 7 === 0) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
}






//2
const runPrime = () => {
    let minNumber = document.getElementById("first").value;
    let maxNumber = document.getElementById("last").value;

    generatePrimeNumberAfterDelayAsync(minNumber, maxNumber)
        .then((number) => { alert('the number: ' + number + ' is a prime number!') })
        .catch((number) => { alert('the number: ' + number + ' is not a prime number!') })

}

const generatePrimeNumberAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.ceil(Math.random() * (max - min + 1) + min);
            console.log(randomNumber);
            let isPrime = false;
            isPrime = test_prime(randomNumber)
            if (isPrime === true) {
                resolve(randomNumber);
            } else {
                reject(randomNumber);
            }
        }, 1000);
    })

}

function test_prime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}