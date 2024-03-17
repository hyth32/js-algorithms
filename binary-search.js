const array = [1, 3, 50, 100, 300, 1000, 100000]

const binarySearch = (value, arr) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        const middleIndex = ((leftIndex + rightIndex) / 2) | 0

        if (arr[middleIndex] === value) {
            return middleIndex
        }

        if (arr[middleIndex] > value) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1
}

console.log(binarySearch(100, array))