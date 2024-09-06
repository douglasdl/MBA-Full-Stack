import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

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