import { useState } from "react";
import { PropTypes } from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (title.trim()) {
			addTodoItem(title);
			setTitle('');
			setMessage('');
		} else {
			setMessage('Please add todo item')
		}
	};

	return (
		<>
		<form onSubmit={handleSubmit} >
			<input
				type="text"
				placeholder="Add todo..."
				value={title}
				onChange={handleChange}
			/>
			<button type="submit">submit</button>
		</form>
			<span>{message}</span>
		</>
	);
}

InputTodo.propTypes = {
	addTodoItem: PropTypes.func
}
 
export default InputTodo;