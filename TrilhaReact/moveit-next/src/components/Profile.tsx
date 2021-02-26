import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andrelinos.png" alt="Andrelino Silva"/>
      <div>
        <strong>Andrelino Silva</strong>
        <p><img src="icons/level.svg" alt=""/> Level 1</p>
      </div>
    </div>
  )
}