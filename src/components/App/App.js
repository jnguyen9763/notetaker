import React from 'react';
import styles from './App.module.css';
import Calendar from '../Calendar/Calendar'
import Notes from '../Notes/Notes'
import List from '../List/List'

export default function App() {
  return (
    <div className={styles.App}>
      <Calendar />
      <Notes />
      <div className={styles.lists}>
        <List />
      </div>
    </div>
  );
}