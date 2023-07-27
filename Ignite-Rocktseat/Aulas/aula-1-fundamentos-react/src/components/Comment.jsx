import styles from "./Comment.module.css";
import {ThumbsUp, Trash} from '@phosphor-icons/react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/99191341?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Emanoel</strong>
              <time title="26 de Julho as 14:47h" dateTime="2023-07-26 14:47">
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
               <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
            
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
            </footer>
      </div>
    </div>
  );
}
