import React from 'react';
import styles from './Notes.module.css';

export default function Notes({ dataNote, setDataNote }) {
	return (
		<div className={styles.Notes}>
			<textarea
				placeholder='Type your notes here'
				value={dataNote}
				onChange={(e) => setDataNote(e.target.value)}
			></textarea>
		</div>
	);
}