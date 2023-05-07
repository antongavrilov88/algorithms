const productOfArrayExceptSelf = (arr) => {

    const result = Array(arr.length).fill(1)

    let prefix = 1
    let current = 0

    while (current < arr.length) {
        result[current] *= prefix
        prefix *= arr[current]
        current += 1
    }

    let suffix = 1
    current = arr.length - 1
    
    while (current >= 0) {
        result[current] *= suffix
        suffix *= arr[current]
        current -= 1
    }

    return result
}

// Tests
//console.log(productOfArrayExceptSelf([])) // []
console.log(productOfArrayExceptSelf([1])) // [1]
console.log(productOfArrayExceptSelf([5])) // [5]
console.log(productOfArrayExceptSelf([1, 2, 3])) // [6, 3, 2]
console.log(productOfArrayExceptSelf([2, 4, 8])) // [32, 16, 8]