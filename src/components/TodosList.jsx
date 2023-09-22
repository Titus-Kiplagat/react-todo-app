import { PropTypes } from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, onChange, onDelete }) => {
	return (
			<ul>
			{todosProps.map((todo) => (
				<TodoItem key={todo.id} itemProp={todo} onChange={onChange} onDelete={onDelete} />
			))}
			</ul>
	);
}

TodosList.propTypes = {
	todosProps: PropTypes.array,
	setTodos: PropTypes.func,
	onChange: PropTypes.func,
	onDelete: PropTypes.func,
}
 
export default TodosList;