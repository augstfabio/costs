import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <li className={styles.social_list}><FaFacebook/></li>
      <li className={styles.social_list}><FaInstagram/></li>
      <li className={styles.social_list}><FaLinkedin/></li> 
      <p>
        <span>Costs</span>
        &copy;2024
      </p>
    </footer>
  )
}
