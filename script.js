const fibo = (input) => {
    if (typeof input !== 'number') {
        return 'please enter a number'
    }

    if (input === 0 || input === 1) {
        return input
    }

    return fibo(input - 1) + fibo(input - 2)
}

// console.log(fibo(4))


const recursiveSummation = (input) => {
    if (typeof input !== 'number') {
        return 'please enter a number'
    }

    if (input <= 1) {
        return input
    }

    return recursiveSummation(input - 1) + input

}

console.log(recursiveSummation(3))