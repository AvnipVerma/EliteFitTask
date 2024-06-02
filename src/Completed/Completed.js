import React, { useState, useEffect } from 'react';
import styles from "./Completed.module.css";
import Todo from '../Todo/Todo';

function Completed({ searchTerm, filterPriority }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const storedCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    setCompletedTodos(storedCompleted);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.text1}>COMPLETED</div>
        <Todo category="completed" todos={completedTodos} setTodos={setCompletedTodos} searchTerm={searchTerm} filterPriority={filterPriority} />
      </div>
    </div>
  );
}

export default Completed