import { Link } from "react-router-dom"
import styles from './Nav.module.css'
import logo from '../../img/costs_logo.png'
export const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.icon} to='/'><img src={logo} alt="Costs" /></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/contact">Contato</Link></li>
                <li className={styles.item}><Link to="/newproject">Novo projeto</Link></li>
            </ul>
        </nav>
    )
}
