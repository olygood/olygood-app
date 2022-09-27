import React from 'react';
import '../../App.css'
import styles from "../component.module.css";
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className={styles.navigation}>
                <ul>
                    
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cv'>CV</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                
                </ul>
            </div>
        </>
    );
}

export default Navigation;

