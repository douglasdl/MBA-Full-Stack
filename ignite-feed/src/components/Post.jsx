import styles from './Post.module.css'

export function Post({ author, content}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}></div>
        <img className={styles.avatar} src="https://github.com/douglasdl.png" alt="Avatar" />
        <div className={styles.authorInfo}>
          <strong>{author}</strong>
          <span>Web Developer</span>
        </div>
        <time title="06 de Setembro às 15:10:00" dateTime="2024-09-06 15:10:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">douglasdl/doctorcare</a></p>
        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>
    </article>
  )  
}