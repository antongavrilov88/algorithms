const removeDuplicatesWithOriginals = (arr) => {
    if (arr.length < 2) return arr
    let current = 0
    let pointer = 1

    while (pointer < arr.length) {
        while (arr[pointer] === arr[pointer + 1]) {
            pointer += 1
        }
        if (arr[pointer] !== arr[current] && arr[pointer] !== arr[pointer - 1]) {
            current += 1
            arr[current] = arr[pointer]
        }
        pointer += 1
    }

    const result = arr.slice(0, current + 1)
    return result
}


// Tests
console.log(removeDuplicatesWithOriginals([])) // []
console.log(removeDuplicatesWithOriginals([1])) // []
console.log(removeDuplicatesWithOriginals([1, 1])) // []
console.log(removeDuplicatesWithOriginals([1, 2, 3, 3, 4, 4, 5, 5, 5, 5])) // [1, 2]