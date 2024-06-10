import { createSlice, nanoid} from "@reduxjs/toolkit"


interface Todo {
    id: string;
    Date: Date;
  }
  
  interface TodoState {
    todos: Todo[];
  }

const initialState : TodoState = {
    todos : []
}

const Todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo: (state)=>{
            const todo :Todo = {
                id : nanoid(),
                Date : new Date()
            }
            state.todos.push(todo)
        }
    }
})

export const {addTodo} = Todoslice.actions;
export default Todoslice.reducer