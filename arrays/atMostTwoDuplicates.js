const atMostTwoDuplicates = (arr) => {
    // if there are 0, 1 or 2 elements in arr, there is no way it can contains more then two duplicates of any element
    // so we can return early
    if (arr.length < 3) return arr

    // create two pointers - one for the current position in "result part" of array,
    // and second one to iterate through original array
    // as it is allowed to have two duplicates, we don't have to check first element
    let current = 1
    let next = 2

    while (next < arr.length) {
        // if next pointer points to the element equal to previouse for the current element it means it is third duplicate in a row
        // so we don't want to push it to the "result part"
        if (arr[next] !== arr[current - 1]) {
            current += 1
            arr[current] = arr[next]
        }
        next += 1
    }
    // now we want cut part of array, we don't need
    const result = arr.slice(0, current + 1)
    return result
}

// Tests
console.log(atMostTwoDuplicates([])) // []
console.log(atMostTwoDuplicates([1])) // [1]
console.log(atMostTwoDuplicates([1, 1])) // [1, 1]
console.log(atMostTwoDuplicates([1, 1, 1])) // [1, 1, 1]
console.log(atMostTwoDuplicates([1, 2, 3, 3, 3, 3, 4, 4, 5])) // [1, 2, 3, 3, 4, 4, 5]
console.log(atMostTwoDuplicates([1, 1, 1, 3, 3, 3, 4, 4, 5])) // [1, 1, 3, 3, 4, 4, 5]