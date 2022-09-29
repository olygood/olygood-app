import React from 'react';
import ShowNavigation from '../components/navigation/ShowNavigation'
import styles from './pages.module.css'
const Animation = () => {
    return (
        <div className= {styles.container_show}>
            <ShowNavigation />
            <h1>je suis Animation</h1>
        </div>
    );
}

export default Animation;
