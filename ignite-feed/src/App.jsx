import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/douglasdl.png",
      name: "Douglas Dias Leal",
      role: "Web Developer"
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'douglasdl/doctorcare'
      },
      {
        type: 'hashTag',
        content: '#novoprojeto'
      },
      {
        type: 'hashTag',
        content: '#nlw'
      },
      {
        type: 'hashTag',
        content: '#rocketseat'
      }
    ],
    publishedAt: new Date('2024-09-08 22:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/douglas.png",
      name: "Douglas",
      role: "Developer"
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'douglasdl/doctorcare'
      },
      {
        type: 'hashTags',
        content: ['#novoprojeto', '#nlw', '#rocketseat']
      }
    ],
    publishedAt: new Date('2024-09-05 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}