import React, { useState, useEffect } from 'react';
import styles from "./OverDue.module.css";
import Todo from '../Todo/Todo';


function OverDue({ searchTerm, filterPriority }){
  const [overdueTodos, setOverdueTodos] = useState([]);

  useEffect(() => {
      const storedOverdue = JSON.parse(localStorage.getItem('overdue')) || [];
      setOverdueTodos(storedOverdue);
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.text1}>OVERDUE</div>
          <Todo category="overdue" todos={overdueTodos} setTodos={setOverdueTodos} searchTerm={searchTerm} filterPriority={filterPriority} />
          </div>
      </div>
  );
}

export default OverDue