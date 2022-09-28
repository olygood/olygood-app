import React from 'react';
import styles from '../component.module.css'
import Card from './Card'
import cyber1 from '../../img/un.jpg'
import { Link } from 'react-router-dom';
const ContainerCard = () => {
    return (
        <div className={styles.container}>
            <div  className={styles.title_container}>
                <h3>Annimation</h3>
            </div>
             
            
                <div className={styles.containerCard}> 
                <Link to='/resumer'> <Card /></Link>
               
                    <Card />
                    <Card />
                   
                </div>
                <div className={styles.container_footer}>
                    <p>jkfklsdjfkjsdklfjksdjfkjskdj</p>
                
                </div>
              
                
        </div>
       
          
        
                
                    
                
       
    );
}

export default ContainerCard;
