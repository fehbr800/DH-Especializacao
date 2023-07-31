import styles from './Sidebar.module.css'
import cardbackground from '../assets/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg'
import {PencilLine } from '@phosphor-icons/react'
import {Avatar} from './Avatar'

export function Sidebar(){
   return(
    <aside className={styles.sidebar}>
    <img className={styles.cover} src={cardbackground} alt="photografy developer" />
    <div className={styles.profile}>
       <Avatar src="https://avatars.githubusercontent.com/u/99191341?v=4" />
        <strong>Matheus Emanoel</strong>
        <span>Web Developer</span>

    </div>
    <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
    </footer>
</aside>
   )
}