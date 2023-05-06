const zigzagConvert = (str, rows) => {
    if (rows === 1 || str.length < 2) return str

    const arr = Array(rows).fill().map(() => [])
    let currentRow = 1
    let isGoingDown = true

    for (let i = 0; i < str.length; i++) {
        arr[currentRow - 1].push(str[i])

        if (isGoingDown) {
            currentRow += 1
            if (currentRow > rows) {
                currentRow = rows - 1
                isGoingDown = false
            }
        } else {
            currentRow -= 1
            if (currentRow < 1) {
                currentRow = 2
                isGoingDown = true
            }
        }
    }
    return arr.reduce((acc, subArr) => acc + subArr.join(''), '')
}


// Tests
console.log(zigzagConvert('antongavrilov', 3)) // anrvnogviotal
console.log(zigzagConvert('antongavrilov', 4)) // aavngvotnrloi