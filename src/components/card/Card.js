import React from 'react';
import styles from '../component.module.css'
import cyber1 from '../../img/un.jpg'

const Card = () => {
    return (
        <div className={styles.card}>
           <img src={cyber1} alt="cyber1" width='300' height='350' />
           
        </div>
    );
}

export default Card;
