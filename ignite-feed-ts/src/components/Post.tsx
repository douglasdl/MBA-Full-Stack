import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link' | 'hashtag';
  content: string;
}

export interface PostType {
  id?: number
  author: Author 
  content: Content[]
  publishedAt: Date
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([newCommentText, ...comments,])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time 
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
      {
        post.content.map((row) => {
          if (row.type === 'paragraph') {
            return <p key={row.content}>{row.content}</p>;
          } else if (row.type === 'link') {
            return <p key={row.content}><a href="#">{row.content}</a></p>;
          } else if (row.type === 'hashtag') {
            return (
              <span key={row.content}>
                <a href="#">{row.content}</a>{' '}
              </span>
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
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => {
            return (
              <Comment 
                key={comment} 
                content={comment} 
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )  
}