/**
 * Created by nguyenle on 4/13/17.
 */
let nextTodoId = 0
export const addTodo = (text) => ({
    type : 'ADD_TODO',
    id : nextTodoId++,
    text

})
