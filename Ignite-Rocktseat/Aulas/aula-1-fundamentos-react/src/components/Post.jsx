import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post, muito bom😄!"]);

  const [newCommentChange, setNewCommentChange] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function newComment(eve) {
    eve.preventDefault();
    setComments([...comments, newCommentChange]);
    setNewCommentChange("");
  }

  function handleNewCommentChange(eve) {
    eve.target.setCustomValidity('')
    setNewCommentChange(eve.target.value);
  }

  function newCommentInvalid(eve){
    eve.target.setCustomValidity('Esse campo é obrigatório!.')
    
  }

  function deleteComment(commentToDelete) {
    const newCommentList = comments.filter(comment =>{
      return comment !== commentToDelete
    })

    setComments(newCommentList)
  }

  const isNewCommentEmpty = newCommentChange.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name} </strong>
            <span>{author.role} </span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={newComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentChange}
          onChange={handleNewCommentChange}
          onInvalid={newCommentInvalid}
          required
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
