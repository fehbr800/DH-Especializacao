import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/99191341?v=4"
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Emanoel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="26 de Julho as 14:47h" dateTime="2023-07-26 14:47">
          Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        <p>
          {" "}
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
        </p>
        <p>
          {" "}
          é DoctorCare 🚀 👉 {" "} <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#"> #novoprojeto</a> <a href="#"> #nlw </a>{" "}
          <a> #rocketseat</a>{"    "}
        </p>
      </div>
    </article>
  );
}
