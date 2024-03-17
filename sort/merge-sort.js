const merge = (left, right) => {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    console.log([...arr, ...left, ...right])
    return [...arr, ...left, ...right]
}

const mergeSort = (arr) => {
    const half = (arr.length / 2) | 0

    if (arr.length < 2) {
        return arr
    }

    const left = arr.splice(0, half)
    return merge(mergeSort(left), mergeSort(arr))
}

const array = [3, 5, 1, 6, 9, 8, 2]
console.log(mergeSort(array))