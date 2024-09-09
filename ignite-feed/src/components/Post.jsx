import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, content, publishedAt}) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event) {
    event.preventDefault()
    setComments([newCommentText, ...comments,])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
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
      {
        content.map((row, index) => {
          if (row.type === 'paragraph') {
            return <p key={index}>{row.content}</p>;
          } else if (row.type === 'link') {
            return <p key={index}><a href="#">{row.content}</a></p>;
          } else if (row.type === 'hashTags') {
            return (
              <p key={index}>
                {row.content.map((hashtag, idx) => (
                  <>
                    <a key={idx} href="#">{hashtag}</a>{' '}
                  </>
                ))}
              </p>
            );
          }
          return null;
        })
      }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => {
            return (
              <Comment content={comment} />
            )
          })
        }
      </div>
    </article>
  )  
}