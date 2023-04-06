const generateBracesSequence = (n) => {
    // initiate result array
    const result = []

    // backtrack function which accept two arguments - current sequence
    // and count of open braces
    const backtrack = (currentString, open) => {
        // handle base case - condition to return the value
        if (currentString.length === 2 * n) return currentString

        // if current sequence is not long enough, add '(' and ')' to the sequence and
        // call the backtrack function again (with right open count value)

        // also we don't want to generate wrong sequences, so we can add som conditions to call the backtrack function

        // here we avoid adding open brace to the sequence which already has n open braces
        // as we never could close the extra one
        if (open < n) {
            const openBranchResult = backtrack(currentString + '(', open + 1)
            // if the returned value is not null we can sure that it is valid sequence,
            // so we can add it to the result array
            if (openBranchResult) result.push(openBranchResult)
        }

        // here we avoid adding close brace to the sequence which has not at least one unmatched open brace

        if (open > currentString.length / 2) {
            const closeBranchResult = backtrack(currentString + ')', open)
            // if the returned value is not null we can sure that it is valid sequence,
            // so we can add it to the result array
            if (closeBranchResult) result.push(closeBranchResult)
        }

        // if we didn't match any of conditions to add any brace to sequence
        // we just return null (or any false value - your choice)
        return null
    }

    backtrack('', 0)

    return result
}

/**
 * Testcases
 * work well and pretty fast. There is no options to optimize, because we want to get all valid sequences,
 * and we already cut out invalid branches
 */

console.log(generateBracesSequence(0)) // []
console.log(generateBracesSequence(1)) // ['()']
console.log(generateBracesSequence(2)) // ['()()', '(())']
console.log(generateBracesSequence(3)) // ['()()()', '(())()', '()(())', '((()))', '(()())']
