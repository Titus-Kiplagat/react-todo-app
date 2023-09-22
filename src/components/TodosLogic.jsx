import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Setup development environment',
			completed: true,
		},
		{
			id: 2,
			title: 'Develop website and add content',
			completed: false,
		},
		{
			id: 3,
			title: 'Deploy to live server',
			completed: false,
		},

	]);

	const handleChange = (id) => {
		setTodos((prevState) => {
			return prevState.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo;
			})
		})
	};

	const addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const handleDelete = (id) => {
		setTodos([
			...todos.filter((todo) => todo.id !== id)
		]);
	};
	
	return (
		<>
			<InputTodo addTodoItem={addTodoItem} />
			<TodosList todosProps={todos} onChange={handleChange} onDelete={handleDelete} />
		</>
	);
}
 
export default TodosLogic;