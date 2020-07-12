import React, { useState } from 'react';
import styles from './Notes.module.css';

export default function Notes() {
	const [notes, setNotes] = useState('');

	const updateNotes = (notes) => {
		setNotes(notes);
	}

	return (
		<div className={styles.Notes}>
			<textarea
				placeholder='Type your notes here'
				value={notes}
				onChange={(e) => updateNotes(e.target.value)}
			></textarea>
		</div>
	);
}