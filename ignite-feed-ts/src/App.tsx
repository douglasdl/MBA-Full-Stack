import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts:PostType[] = [
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
        type: 'hashtag',
        content: '#novoprojeto'
      },
      {
        type: 'hashtag',
        content: '#nlw'
      },
      {
        type: 'hashtag',
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
        type: 'hashtag',
        content: '#novoprojeto'
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
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}