const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = ((arr.length - 1) / 2) | 0
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue
        }

        if (arr[i] > arr[pivotIndex]) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }

    const sortedLeftArr = quickSort(leftArr)
    const sortedRightArr = quickSort(rightArr)

    return [...sortedLeftArr, arr[pivotIndex], ...sortedRightArr]
}

const arr = [1, 7, 50, 2, 300, 10, 2]
console.log(quickSort(arr))