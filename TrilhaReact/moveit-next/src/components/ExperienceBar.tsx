import styles from '../styles/components/ExperienceBar.module.css';
import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im';
import { CgGym } from 'react-icons/cg';


export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 <ImStarEmpty /></span>
            <div>
                
                <div style={{ width: '50%'}} />
                <span className={styles.currentExperience} style={{ left: '50%' }}>300 <ImStarHalf /></span>
            </div>
            <span>600 <ImStarFull /></span>

        </header>
    )
}