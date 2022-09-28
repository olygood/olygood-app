import React from 'react';
import '../../App.css'
import styles from "../component.module.css";
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
                   <div className={styles.navigation}>
            <div className={styles.side_left}>
                <NavLink className={styles.title_olygood} to='/'>OLYGOOD</NavLink>
            </div>
                <div className={styles.side_right}>
                    <ul>
                        <li><NavLink className={styles.title_link} to='/show'>Show</NavLink></li>
                        <li><NavLink className={styles.title_link} to='/cv'>CV</NavLink></li>
                        <li><NavLink className={styles.title_link} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
               
        </div>
        </div>
     
        
    );
}

export default Navigation;

