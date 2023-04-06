
/**
    Brute force
 */
const fib = (n) => {
    // base cases - as we know exactly what first and second fibonacci numbers equal to
    if (n < 3) return 1

    // as we didn't hot the base cases, call fib recursively
    // and decrease arguments, to reach the base case eventually
    return fib(n - 1) + fib(n - 2)
}

/**
 * Test cases
 * work well but only for small numbers
 */

// console.log(fib(1)) // 1
// console.log(fib(2)) // 1
// console.log(fib(5)) // 5
// console.log(fib(6)) // 8
// console.log(fib(8)) // 21
// console.log(fib(20)) // 6765
// console.log(fib(50)) // 12586269025 - will work? but veeeeeery slow

/**
    Memoized version - to make brute force implementation more efficient
    we just need to cut duplicate calculating.
    We'll add memoization logic to the brut force implementation. So if algorithm meets
    arguments  which was calculated before - there is no need to do it one more time.
    We can just return memoized data
 */

// notice that there is new argument in our function - memo object,
// which is empty object ({}) by default
const memoizedFib = (n, memo = {}) => {
    // Long story short - we now have another base case if the value for the argument 'n'
    // is stored in the memo. If it is, we don't need to calculate it again
    // and we can just return stored value
    if (n in memo) return memo[n]
    // then we still have to handle trivial base cases
    if (n < 3) return 1

    // logic here is pretty the same as in brute force, except one thing:
    //  we have to pass existing memo object to the next recursion call
    const newFib = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo)
    // then we want store calculated value in memo object, so we never have to calculate it again
    memo[n] = newFib
    // it actually doesn't matter what to return - the value or the stored value,
    //  as we store values in hash-map, and it takes O(n) time to get value from hash map
    return memo[n]
}


/**
 * Test cases
 * work well even with large numbers
 */

console.log(memoizedFib(2)) // 1
console.log(memoizedFib(5)) // 5
console.log(memoizedFib(6)) // 8
console.log(memoizedFib(8)) // 21
console.log(memoizedFib(20)) // 6765
console.log(memoizedFib(50)) // 12586269025 - really fast now

