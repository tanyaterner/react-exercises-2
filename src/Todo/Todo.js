import React from 'react';
import './Todo.scss';

function Todo() {
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<input placeholder="Your task..." /> <button>Add task</button>
		</div>
	)
}

export default Todo;
