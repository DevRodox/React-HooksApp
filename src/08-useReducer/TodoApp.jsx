import { useReducer } from "react";
import { todoReducer, TodoList, TodoAdd } from "./";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Aprender hmtl',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Aprender css',
        done: false,
    }

];

export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo })
    };

    return(
        <>
            <h1>Todo App: 10 <small>pendientes: 2 </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos = { todos }/>
                </div>
                <div className="col-5">
                     <h4>Agregar TODO</h4>
                     <hr />
                     <TodoAdd onNewTodo = { handleNewTodo }/>
                </div>
            </div>
        </>
    );
};