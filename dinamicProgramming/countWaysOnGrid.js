/**
 * Count the ways to reach right-down cell of grid from left-up cell
 * You can go only down and right
 * @param height
 * @param width
 */

/**
 * Brute force
 */

const countWaysOnGrid = (height, width) => {
        // handle valid base case , which is height === 1, width === 1,
        // as there is only one exact way to go to the grid cell if we are on this cell
        if (height === 1 && width === 1) return 1
        // handle not valid base case, which height < 0 or width < 0
        // as there are no way to reach right-down cell (we are out of grid)
        if (height <=  0 || width <= 0) return 0

        // if we didn't hit any of base cases, call the function itself with down step and right step.
        // add current count to returned value and add sum to the result counter

        // no need to check if the new values are valid as we handle these cases in the recursion call
        const downCount =  countWaysOnGrid(height - 1, width)
        const rightCount =  countWaysOnGrid(height, width - 1)

        //  return sum of both brunches counts
        return downCount + rightCount
}

/**
 * Testcases
 */

console.log(countWaysOnGrid(0, 0)) // 0
console.log(countWaysOnGrid(1, 1)) // 1
console.log(countWaysOnGrid(2, 2)) // 2
console.log(countWaysOnGrid(2, 3)) // 3
console.log(memoizedCountWaysOnGrid(20, 20)) // 35345263800 veeeeeeery slow

/**
 * Memoized version - we will memoize calculated branches and return stored value
 * instead of calculate them again
 */

// add the memo object with default value equals to {}
const memoizedCountWaysOnGrid = (height, width, memo = {}) => {
    // check if we already stored value for those arguments. If we did - return stored value
    if (`${height},${width}` in memo) return memo[`${height},${width}`]
    // check if symmetry cell result is already stored in memo. If it is - return it (as results for symmetry cells will be the same)
    if (`${width},${height}` in memo) return memo[`${width},${height}`]
    // check if we hit the valid base case
    if (height === 1 && width === 1) return 1
    // check if hit invalid base case
    if (height < 1 || width < 1) return 0

    // if we didn't hit any of base cases call the function itself for both
    // down step and right step AND pass the memo object to the nex call stack.
    // then store returned counts to the variables
    const downBrunch = memoizedCountWaysOnGrid(height - 1, width, memo)
    const rightBrunch = memoizedCountWaysOnGrid(height, width - 1, memo)

    // store sum of counts for both brunches in memo
    memo[`${height},${width}`] = downBrunch + rightBrunch
    // return sum of to brunches
    return downBrunch + rightBrunch
}



console.log(memoizedCountWaysOnGrid(0, 0)) // 0
console.log(memoizedCountWaysOnGrid(1, 1)) // 1
console.log(memoizedCountWaysOnGrid(2, 2)) // 2
console.log(memoizedCountWaysOnGrid(2, 3)) // 3
console.log(memoizedCountWaysOnGrid(20, 20)) // 35345263800 really fast