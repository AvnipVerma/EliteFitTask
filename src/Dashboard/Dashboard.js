import React, { useState } from 'react';
import styles from "./Dashboard.module.css";
import OverDue from '../OverDue/OverDue';
import UpComing from '../UpComing/UpComing';
import Completed from '../Completed/Completed';

function Dashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <input
                    placeholder='Search Here'
                    className={styles.search}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className={styles.search}
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                >
                    <option value=''>ALL TASKS</option>
                    <option value='high'>HIGH PRIORITY</option>
                    <option value='moderate'>MODERATE PRIORITY</option>
                    <option value='low'>LOW PRIORITY</option>
                </select>
            </div>
            <div className={styles.container3}>
                <OverDue searchTerm={searchTerm} filterPriority={filterPriority} />
                <div className={styles.verticalLine}></div>
                <UpComing searchTerm={searchTerm} filterPriority={filterPriority} />
                <div className={styles.verticalLine}></div>
                <Completed searchTerm={searchTerm} filterPriority={filterPriority} />
            </div>
        </div>
    );
}

export default Dashboard;
