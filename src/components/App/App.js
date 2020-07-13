import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Calendar from '../Calendar/Calendar';
import Notes from '../Notes/Notes';
import Goals from '../Goals/Goals';
import Todos from '../Todos/Todos';

const dataTable = {}

export default function App() {
  const [dateKey, setDateKey] = useState('');
  const [dataNote, setDataNote] = useState('');
  const [dataGoals, setDataGoals] = useState([]);
  const [dataTodos, setDataTodos] = useState([]);

  useEffect(() => {
    console.log(dataTable);
    if (dataTable.hasOwnProperty(dateKey)) {
      setDataNote(dataTable[dateKey].note);
      setDataGoals(dataTable[dateKey].goals);
      setDataTodos(dataTable[dateKey].todos);
    } else {
      setDataNote('');
      setDataGoals([]);
      setDataTodos([]);
    }
  }, [dateKey]);

  useEffect(() => {
    if (dateKey === '') return;
    if (dataNote === '' && !dataGoals.length && !dataTodos.length) {
      // prevent extra objects being stored
      if (dataTable.hasOwnProperty(dateKey)) delete dataTable[dateKey];
      return;
    }
    if (!dataTable.hasOwnProperty(dateKey)) dataTable[dateKey] = {};
    dataTable[dateKey].note = dataNote;
    dataTable[dateKey].goals = dataGoals;
    dataTable[dateKey].todos = dataTodos;
  }, [dateKey, dataNote, dataGoals, dataTodos]);

  return (
    <div className={styles.App}>
      <Calendar setDateKey={setDateKey} />
      <Notes dataNote={dataNote} setDataNote={setDataNote} />
      <div className={styles.lists}>
        <Goals dataGoals={dataGoals} setDataGoals={setDataGoals} />
        <Todos dataTodos={dataTodos} setDataTodos={setDataTodos} />
      </div>
    </div>
  );
}