import styles from './Header.module.css'
import logo from '../assets/ignite-simbol.svg'

export function Header(){
    return(
        <div>
            <header className={styles.header}>
                <img src={logo} alt="logo-ignite" />
            <strong >Ignite feed</strong>
            </header>
        </div>
    )
}