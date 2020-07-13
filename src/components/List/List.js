import React, { useState, useEffect } from 'react';
import styles from './List.module.css';
import ListItem from './ListItem/ListItem';
import { v4 as uuidv4 } from 'uuid';

export default function List({ style, name, placeholder, uncheckedIcon, checkedIcon, dataListItems, setDataListItems }) {
	const [input, setInput] = useState('');
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
		setDataListItems([...dataListItems, listItem]);
		setToggleScroll(!toggleScroll);
		setInput('');
	}

	const checkListItem = id => {
		const itemsCopy = [...dataListItems];
		for (let item of itemsCopy) {
			if (item.id !== id) continue;
			item.isChecked = !item.isChecked;
			setDataListItems(itemsCopy);
			break;
		}
	}

	const deleteListItem = id => {
		const itemsCopy = [...dataListItems];
		for (let i = 0; i < itemsCopy.length; i++) {
			if (itemsCopy[i].id !== id) continue;
			itemsCopy.splice(i, 1);
			setDataListItems(itemsCopy);
			break;
		}

	}

	const displayListItems = () => {
		return dataListItems.map(({ id, input, isChecked }) =>
			<ListItem
				id={id}
				input={input}
				isChecked={isChecked}
				key={id}
				uncheckedIcon={uncheckedIcon}
				checkedIcon={checkedIcon}
				checkListItem={checkListItem}
				deleteListItem={deleteListItem}
			/>);
	}

	return (
		<div className={[styles.List, style].join(' ')}>
			<div className={styles.listTitle}>{name}</div>
			<div id='list' className={styles.listItems}>
				{displayListItems()}
			</div>
			<form onSubmit={(e) => updateList(e)}>
				<input
					type='text'
					placeholder={placeholder}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		</div>
	);
}