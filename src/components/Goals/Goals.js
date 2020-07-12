import React from 'react';
import List from '../List/List';
import styles from './Goals.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as unchecked } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as checked } from '@fortawesome/free-solid-svg-icons'

export default function Goals() {
	return (
		<List
			style={styles.Goals}
			name='Daily Goals'
			placeholder='Enter your goals'
			uncheckedIcon={<FontAwesomeIcon icon={unchecked} />}
			checkedIcon={<FontAwesomeIcon icon={checked} />}
		/>
	);
}