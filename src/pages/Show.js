import React from 'react';
import styles from "./pages.module.css"
import {NavLink} from 'react-router-dom'
import ContainerCard from '../components/card/ContainerCard'


const Show = () => {
    return (
        <>
           
                <div className={styles.show}>
                    <NavLink className={styles.show_link} to='/show'>Annimation</NavLink>
                    <NavLink className={styles.show_link} to='/show'>photoshop</NavLink>
                    <NavLink className={styles.show_link} to='/show'>after effect</NavLink>
                </div>
                
                <div className='grille'>
                   <ContainerCard />
                </div>
        </>
            
        
            
        
   
    );
}

export default Show;
