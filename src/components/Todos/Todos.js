import React from 'react';
import List from '../List/List';
import styles from './Todos.module.css';

export default function Todos({ dataTodos, setDataTodos }) {
	return (
		<List
			style={styles.Todos}
			name="Today's Todos"
			placeholder='Enter your todos'
			dataListItems={dataTodos}
			setDataListItems={setDataTodos}
		/>
	);
}