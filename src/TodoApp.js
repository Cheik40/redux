// TodoApp.js
import React from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions";

const TodoApp = ({ todos, addTodo, removeTodo }) => {
    let input;

    return (
        <div>
            <h1>Todo List</h1>
            <input ref={(node) => (input = node)} />
            <button
                onClick={() => {
                    addTodo(input.value);
                    input.value = "";
                }}
            >
                Add Todo
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}{" "}
                        <button onClick={() => removeTodo(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addTodo,
    removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
