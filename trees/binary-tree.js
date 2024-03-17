const Node = (data) => ({
    data,
    left: null,
    right: null
})

const insert = (root, data) => {
    if (!root) return Node(data)

    if (data < root.data) {
        root.left = insert(root.left, data)
    } else if (data > root.data) {
        root.right = insert(root.right, data)
    }

    return root
}

const search = (root, data) => {
    if (!root || root.data === data) return root

    if (data < root.data) {
        return search(root.left, data)
    } else {
        return search(root.right, data)
    }
}

const remove = (root, data) => {
    if (!root) return root

    if (data < root.data) {
        root.left = remove(root.left, data)
    } else if (data > root.data) {
        root.right = remove(root.right, data)
    } else {
        if (!root.left) return root.right
        else if (!root.right) return root.left

        root.data = minValue(root.right)
        root.right = remove(root.right, root.data)
    }

    return root
}

const minValue = (node) => {
    let current = node
    while (current.left) {
        current = current.left
    }
    return current.data
}

// Пример использования
let root = null
root = insert(root, 10)
root = insert(root, 5)
root = insert(root, 15)
root = insert(root, 3)
root = insert(root, 8)

console.log(root)