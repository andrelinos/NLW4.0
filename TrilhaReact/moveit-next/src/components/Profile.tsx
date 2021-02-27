import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andrelinos.png" alt="Andrelino Silva"/>
      <div>
        <strong>Andrelino Silva</strong>
        <p><img src="icons/level.svg" alt=""/> Level {level}</p>
      </div>
    </div>
  )
}