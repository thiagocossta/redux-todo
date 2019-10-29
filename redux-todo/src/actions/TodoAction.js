export function addTodo (text) {
    return {
        type: 'TODO_ADD',
        payload: text,
    }
}

export function removeTodo (id) {
    return {
        type: 'TODO_REMOVE',
        payload: id,
    }
}