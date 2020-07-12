import React, { useState } from 'react';
import styles from './List.module.css';

export default function List() {
	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);

	const updateList = e => {
		e.preventDefault();
		setItems([...items, input]);
		setInput('');
	}

	const displayListItems = () => {
		return items.map(item => <div className={styles.listItem}>{item}</div>)
	}

	return (
		<div className={styles.List}>
			<div className={styles.listItems}>
				{displayListItems()}
			</div>
			<form onSubmit={(e) => updateList(e)}>
				<input
					type='text'
					placeholder='Enter something'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		</div>
	);
}