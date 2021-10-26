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

// console.log(recursiveSummation(3))


const isPalindrome = (input) => {
    if (typeof input === 'number') {
        input = input.toString()
    }

    if (input.length === 1 || input.length === 0) {
        return true
    }

    if (input[0] === input[input.length - 1]) {
        return isPalindrome(input.substring(1, input.length - 1))
    }

    return false
}

// console.log(isPalindrome(1231))

const findBinary = (decimal, result) => {
    if (typeof decimal !== 'number') {
        return 'please enter a number'
    }

    if (decimal === 0) {
        return result
    }

    result = Math.floor(decimal % 2) + result
    return findBinary(Math.floor(decimal / 2), result)

}

// console.log(findBinary(6, ''))

const binarySearch = (list, left, right, item) => {
    if (left > right) {
        return -1
    }

    const mid = Math.floor((left + right) / 2)

    if (item === list[mid]) {
        return mid
    }

    if (item > list[mid]) {
        return binarySearch(list, mid + 1, right, item)
    }

    return binarySearch(list, left, mid - 1, item)
}

console.log(binarySearch([-1, 5, 8, 9, 12], 0, 4, 9))