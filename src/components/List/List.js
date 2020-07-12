import React, { useState, useEffect } from 'react';
import styles from './List.module.css';
import ListItem from './ListItem/ListItem';
import { v4 as uuidv4 } from 'uuid';

export default function List() {
	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);
	const [toggleScroll, setToggleScroll] = useState(false);

	useEffect(() => {
		// scroll to bottom when a new item gets added
		const scrollWindow = document.querySelector('#list');
		scrollWindow.scrollTop = scrollWindow.scrollHeight - scrollWindow.clientHeight;
	}, [toggleScroll]);

	const updateList = e => {
		e.preventDefault();
		if (input === '') return;
		const listItem = {
			input,
			id: uuidv4(),
			isChecked: false,
		}
		setItems([...items, listItem]);
		setToggleScroll(!toggleScroll);
		setInput('');
	}

	const checkListItem = id => {
		const itemsCopy = [...items];
		for (let item of itemsCopy) {
			if (item.id !== id) continue;
			item.isChecked = !item.isChecked;
			setItems(itemsCopy);
			break;
		}
	}

	const deleteListItem = id => {
		const itemsCopy = [...items];
		for (let i = 0; i < itemsCopy.length; i++) {
			if (itemsCopy[i].id !== id) continue;
			itemsCopy.splice(i, 1);
			setItems(itemsCopy);
			break;
		}

	}

	const displayListItems = () => {
		return items.map(({ id, input, isChecked }) =>
			<ListItem
				id={id}
				input={input}
				isChecked={isChecked}
				key={id}
				checkListItem={checkListItem}
				deleteListItem={deleteListItem}
			/>);
	}

	return (
		<div className={styles.List}>
			<div className={styles.listTitle}>List name</div>
			<div id='list' className={styles.listItems}>
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