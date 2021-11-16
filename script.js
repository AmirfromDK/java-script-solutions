// Q1
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

// Q2
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

//Q3
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

//Q4
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

//Q5
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

// console.log(binarySearch([-1, 5, 8, 9, 12], 0, 4, 9))


//Q6
const mergeSort = (list) => {
    if (list.length <= 1) {
        return list
    }
    const mid = list.length / 2
    const left = list.splice(0, mid)
    return merge(mergeSort(left), mergeSort(list))

}

const merge = (left, right) => {
    let arr = []

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            arr.push(right.shift())
        } else {
            arr.push(left.shift())
        }
    }

    return [...arr, ...left, ...right]
}

// console.log(mergeSort([-5, 10, -1, 5, 15]))


//Q7
const countTrue = (arr) => {
    let counter = 0

    for (const arrKey of arr) {
        if (arrKey) {
            counter++
        }
    }
    return counter
}

// console.log(countTrue([true, false, false, true, false]))

//Q8
const shiftToRight = (x, y) => {
    if (y <= 0) return x

    return shiftToRight(Math.floor(x / 2), y - 1)
}

// console.log(shiftToRight(80, 3))

//Q9
const addName = (obj, name, value) => {
    obj[name] = value
    return obj
}

// console.log(addName({ piano: 500 }, "Brutus", 300))

//Q10
const toArray = (obj) => {
    return Object.entries(obj)
}

// console.log(toArray({key:'value', key1:'value1'}))

//Q11
const contain = (obj, value) => {
    for (const key in obj) {
        // base case
        if (obj[key] === value)
            return true

        if (typeof obj[key] === 'object') {
            return contain(obj[key], value)
        }

    }

    return false
}
// console.log(contain(nestedObject, 44))

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2',
                    }
                }
            }
        }
    }
}

//Q12
const totalIntegers = (arr) => {
    let counter = 0
    if (arr.length === 0) return 0

    const first = arr.shift()

    if (Array.isArray(first)) {
        counter += totalIntegers(first)
    }

    if (Number.isInteger(first)) {
        counter++
    }
    return counter + totalIntegers(arr)
}

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))

