import React from 'react';
import styles from "./pages.module.css"
import {NavLink} from 'react-router-dom'
import ContainerCard from '../components/card/ContainerCard'
import ShowNavigation from '../components/navigation/ShowNavigation';

const Show = () => {
    return (
        <div className= {styles.container_show}>
              {/* navigation en dur dans show sans importer un component */}
                {/* <div className={styles.show}>
                    <NavLink className={styles.show_link} to='/show'>Annimation</NavLink>
                    <NavLink className={styles.show_link} to='/show'>photoshop</NavLink>
                    <NavLink className={styles.show_link} to='/show'>after effect</NavLink>
                </div> */}
                <ShowNavigation />
                <div className='grille'>
                   <ContainerCard />
                </div>
        </div>
              
        
            
        
            
        
   
    );
}

export default Show;
