import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Douglas Dias Leal"
          content="Conteúdo do post"
          />
          <Post
            author="Karina Mizuta Leal"
            content="Conteúdo do outro post"
          />
        </main>
      </div>
    </div>
  )
}