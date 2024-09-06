import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/douglasdl.png" alt="Avatar" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Douglas Dias Leal</strong>
              <time title="06 de Setembro às 15:10:00" dateTime="2024-09-06 15:10:00">Cerca de 2h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
          </button>
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  )
}