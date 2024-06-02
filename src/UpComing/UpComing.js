import React, { useState, useEffect } from 'react';
import styles from "./UpComing.module.css";
import Todo from '../Todo/Todo';

function UpComing({ searchTerm, filterPriority }) {
  const [upcomingTodos, setUpcomingTodos] = useState([]);

  useEffect(() => {
    const storedUpcoming = JSON.parse(localStorage.getItem('upcoming')) || [];
    setUpcomingTodos(storedUpcoming);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.text1}>UPCOMING</div>
        <Todo category="upcoming" todos={upcomingTodos} setTodos={setUpcomingTodos} searchTerm={searchTerm} filterPriority={filterPriority} />
      </div>
    </div>
  );
}

export default UpComing