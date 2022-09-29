import React from 'react';
import styles from '../../components/component.module.css'
import {NavLink} from 'react-router-dom'

const ShowNavigation = () => {
    return (
        
            <div className={styles.show_navigation}>
             
                    <ul>
                        <li><NavLink className={styles.title_link} to='/animation'>Anim</NavLink></li>
                        <li><NavLink className={styles.title_link} to='/projet'>projet</NavLink></li>
                        
                    </ul>
             
                 
               
            </div>
        

    );
}

export default ShowNavigation;
