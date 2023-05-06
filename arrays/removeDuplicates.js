// in-place

const removeDuplicates = (arr) => {
    if (arr.length < 2) return arr

    let current = 0 // first pointer
    let next = 1 // second pointer

    while (next < arr.length) {
        if (arr[next] !== arr[current]) {
            current += 1
            arr[current] = arr[next]
        }
        next += 1
    }
    result = arr.slice(0, current + 1)
    return result
}

// Tests
console.log(removeDuplicates([])) // []
console.log(removeDuplicates([1])) // [1]
console.log(removeDuplicates([1, 1])) // [1]
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 5, 5])) // [1, 2, 3, 4, 5]

// new array

const removeDuplicatesNewArr = (arr) => {
    if (arr.length < 2) return arr
    
    const result = []

    let next = 0

    while (next < arr.length) {
        if (result.length === 0 || arr[next] !== result[result.length - 1]) result.push(arr[next])
        next += 1
    }

    return result
}


// Tests
console.log(removeDuplicatesNewArr([])) // []
console.log(removeDuplicatesNewArr([1])) // [1]
console.log(removeDuplicatesNewArr([1, 1])) // [1]
console.log(removeDuplicatesNewArr([1, 2, 3, 3, 4, 4, 5, 5, 5, 5])) // [1, 2, 3, 4, 5]