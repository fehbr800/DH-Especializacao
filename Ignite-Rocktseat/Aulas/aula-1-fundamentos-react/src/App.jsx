import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/99191341?v=4",
      name: "Matheus Emanoel",
      role: "Front-end Developer",
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa 👋" },
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content:'jane.design/doctorcare'}
      
    ],
    publishedAt: new Date('2023-07-28'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/99191341?v=4",
      name: "Matheus L",
      role: "Developer",
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa 👋" },
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content:'jane.design/doctorcare'}
      
    ],
    publishedAt: new Date('2023-07-25'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
         return(
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
         )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
