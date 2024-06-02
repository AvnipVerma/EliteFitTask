import React, { useState } from 'react';
import styles from "./Todo.module.css";
import { BackgroundBlur } from '../BasicComponents/BackgroundBlur';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

function Todo({ category, todos, setTodos, searchTerm, filterPriority }) {
    const [click, setClick] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleCalendarClick = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

    const handleButtonClick = (priority) => {
        setActiveButton(priority);
    };

    const OpenBox = () => {
        setClick(true);
    };

    const handleSave = () => {
        const newTodo = {
            title,
            priority: activeButton,
            dueDate: selectedDate.toDateString(),
        };
        let updatedTodos;
        if (editIndex !== null) {
            updatedTodos = todos.map((todo, index) =>
                index === editIndex ? newTodo : todo
            );
            setEditIndex(null);
        } else {
            updatedTodos = [...todos, newTodo];
        }
        setTodos(updatedTodos);
        localStorage.setItem(category, JSON.stringify(updatedTodos));
        setClick(false);
        setTitle('');
        setActiveButton(null);
        setSelectedDate(new Date());
    };

    const handleEdit = (index) => {
        const todo = todos[index];
        setTitle(todo.title);
        setActiveButton(todo.priority);
        setSelectedDate(new Date(todo.dueDate));
        setEditIndex(index);
        setClick(true);
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        localStorage.setItem(category, JSON.stringify(updatedTodos));
    };

    const filteredTodos = todos.filter(todo => {
        return (
            todo.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterPriority ? todo.priority === filterPriority : true)
        );
    });

    return (
        <div className={styles.container}>
            <button className={styles.plus} onClick={OpenBox}>+</button>

            {click && (
                <BackgroundBlur>
                    <div className={styles.modalContent}>
                        <div className={styles.container6}>
                            <div className={styles.title}>Title</div>
                            <div className={styles.hash}>*</div>
                        </div>
                        <input
                            className={styles.formbar}
                            placeholder='Enter Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className={styles.container4}>
                            <div className={styles.container7}>
                                <div className={styles.Priority}>Select Priority</div>
                                <div className={styles.hash}>*</div>
                            </div>
                            <div className={styles.prioritybtn}>
                                <button
                                    className={`${styles.high} ${activeButton === 'high' ? styles.active : ''}`}
                                    onClick={() => handleButtonClick('high')}
                                >
                                    High Priority
                                </button>
                                <button
                                    className={`${styles.moderate} ${activeButton === 'moderate' ? styles.active : ''}`}
                                    onClick={() => handleButtonClick('moderate')}
                                >
                                    Moderate Priority
                                </button>
                                <button
                                    className={`${styles.low} ${activeButton === 'low' ? styles.active : ''}`}
                                    onClick={() => handleButtonClick('low')}
                                >
                                    Low Priority
                                </button>
                            </div>
                        </div>
                        <div className={styles.container5}>
                            <div>
                                <button className={styles.calendar} onClick={handleCalendarClick}>Select Due Date</button>
                                {showCalendar && (
                                    <div>
                                        <BackgroundBlur>
                                            <Calendar
                                                onChange={handleDateChange}
                                                value={selectedDate}
                                                className={styles.calendarsty}
                                            />
                                        </BackgroundBlur>
                                    </div>
                                )}
                            </div>
                            <div className={styles.container8}>
                                <button className={styles.Save} onClick={handleSave}>Save</button>
                                <button onClick={() => setClick(false)} className={styles.closeButton}>Close</button>
                            </div>
                        </div>
                    </div>
                </BackgroundBlur>
            )}

            <div className={styles.todoList}>
                {filteredTodos.map((todo, index) => (
                    <div key={index} className={styles.todoItem}>
                        <div className={styles.title2}>{todo.title}</div>
                        <div className={styles.priority}>Priority: {todo.priority}</div>
                        <div className={styles.date}>Due Date: {todo.dueDate}</div>
                        <div className={styles.container9}>
                            <button className={styles.button1} onClick={() => handleEdit(index)}>EDIT</button>
                            <button className={styles.button2} onClick={() => handleDelete(index)}>DELETE</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
