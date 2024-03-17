const selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let indexMax = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > indexMax) {
                indexMax = j
            }
        }

        if (indexMax !== i) {
            const temp = arr[i]
            arr[i] = arr[indexMax]
            arr[indexMax] = temp
        }
    }

    return arr
}


const array = [1, 3, 50, 100, 300, 1000, 100000]

console.log(selectSort(array))