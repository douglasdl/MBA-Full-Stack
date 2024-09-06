import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      
      <Post
        author="Douglas Dias Leal"
        content="Conteúdo do post"
      />
      <Post
        author="Karina Mizuta Leal"
        content="Conteúdo do outro post"
      />
    </div>
  )
}