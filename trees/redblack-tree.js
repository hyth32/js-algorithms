const RED = true
const BLACK = false

const Node = (data, color) => ({
    data,
    left: null,
    right: null,
    color
})

const insert = (root, data) => {
    const insertHelper = (node, data) => {
        if (!node) return Node(data, RED)

        if (data < node.data) {
            node.left = insertHelper(node.left, data)
        } else if (data > node.data) {
            node.right = insertHelper(node.right, data)
        }

        if (isRed(node.right) && !isRed(node.left)) {
            node = rotateLeft(node)
        }
        if (isRed(node.left) && isRed(node.left.left)) {
            node = rotateRight(node)
        }
        if (isRed(node.left) && isRed(node.right)) {
            flipColors(node)
        }

        return node
    }

    const isRed = (node) => {
        if (!node) return false
        return node.color === RED
    }

    const rotateLeft = (node) => {
        const temp = node.right
        node.right = temp.left
        temp.left = node
        temp.color = node.color
        node.color = RED
        return temp
    }

    const rotateRight = (node) => {
        const temp = node.left
        node.left = temp.right
        temp.right = node
        temp.color = node.color
        node.color = RED
        return temp
    }

    const flipColors = (node) => {
        node.color = RED
        node.left.color = BLACK
        node.right.color = BLACK
    }

    root = insertHelper(root, data)
    root.color = BLACK
    return root
}

// Пример использования
let root = null
root = insert(root, 10)
root = insert(root, 20)
root = insert(root, 30)
root = insert(root, 40)
root = insert(root, 50)
console.log(root)