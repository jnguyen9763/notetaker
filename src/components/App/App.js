import React from 'react';
import styles from './App.module.css';
import Calendar from '../Calendar/Calendar';
import Notes from '../Notes/Notes';
import Goals from '../Goals/Goals';
import Todos from '../Todos/Todos';

export default function App() {
  return (
    <div className={styles.App}>
      <Calendar />
      <Notes />
      <div className={styles.lists}>
        <Goals />
        <Todos />
      </div>
    </div>
  );
}