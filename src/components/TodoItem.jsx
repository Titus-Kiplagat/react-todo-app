import { PropTypes } from 'prop-types';

const TodoItem = ({ itemProp, onChange, onDelete }) => {

	return (
		<li>
			<input
				type="checkbox"
				checked={itemProp.completed}
				onChange={() => onChange(itemProp.id)}
			/>
			{itemProp.title}
			<button onClick={() => onDelete(itemProp.id)}>delete</button>
		</li>
	);
}

TodoItem.propTypes = {
	itemProp: PropTypes.object,
	onChange: PropTypes.func,
	onDelete: PropTypes.func,
}
 
export default TodoItem;