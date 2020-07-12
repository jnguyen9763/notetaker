import React from 'react';
import styles from './ListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function ListItem({ id, input, isChecked, uncheckedIcon, checkedIcon, checkListItem, deleteListItem }) {
	return (
		<div className={styles.ListItem}>
			<button className={styles.checkBox} onClick={() => checkListItem(id)}>
				{isChecked ?
					checkedIcon ? checkedIcon : <FontAwesomeIcon icon={faCheckCircle} /> :
					uncheckedIcon ? uncheckedIcon : <FontAwesomeIcon icon={faCircle} />
				}
			</button>
			<div className={styles.input}>{input}</div>
			{isChecked &&
				<button className={styles.delete} onClick={() => deleteListItem(id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			}
		</div>
	);
}