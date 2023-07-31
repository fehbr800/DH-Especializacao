import { useState } from "react";
import {Avatar} from "./Avatar";
import styles from "./Comment.module.css";
import {ThumbsUp, Trash} from '@phosphor-icons/react'

interface CommentProps{
  content: string;
  onDeleteComment: (comment:string) => void ;
}

export function Comment({content, onDeleteComment}:CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDelete(){
    onDeleteComment(content)
    console.log('deu certo')

  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
    
  }

  return (
    <div className={styles.comment}>
          <Avatar hasBorder={false}
            src="https://avatars.githubusercontent.com/u/99191341?v=4" 
            alt=""
          />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Emanoel</strong>
              <time title="26 de Julho as 14:47h" dateTime="2023-07-26 14:47">
                Cerca de 1hr atrás
              </time>
            </div>

            <button onClick={handleDelete} title="Deletar comentário">
               <Trash size={24}/>
            </button>
          </header>
          <p>{content} </p>
        </div>

        <footer>
            
            <button onClick={handleLikeComment}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount} </span>
            </button>
            </footer>
      </div>
    </div>
  );
}
