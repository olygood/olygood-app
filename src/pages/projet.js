import React from 'react';
import ShowNavigation from '../components/navigation/ShowNavigation'
import styles from './pages.module.css'
const Projet = () => {
    return (
        <div className= {styles.container_show}>
            <ShowNavigation />
            <h1>je suis projet</h1>
        </div>
    );
}

export default Projet;
