'use client'
 
import { useParams } from 'next/navigation'
import movies from '../movies.json'
import styles from './styles.module.css'
import Link from 'next/link'

function MovieDetails () {
  const { id } = useParams()
  const movie = movies.find(movie => movie.imdbID === id)
  if(!movie){
    return <div className={styles.text}>Movie not found</div>
  }
  return <div style={{ padding: '1rem' }}>
  <p className={styles.text}><Link href="/movies" onClick={() => document.startViewTransition()}>← Go back</Link></p>
  <div className={styles.card} style={{ viewTransitionName: `container-${movie.imdbID}` }}>
    <div className={styles.data}>
      <h1 className={styles.title}>{movie.Title}</h1>
      <span className={styles.genres}>{movie.Genre.split(', ').join(' / ')}</span>
      <span className={styles.genres}>{(new Date(movie.Released)).toLocaleDateString('fr')}</span>
      <p className={styles.plot}>{movie.Plot}</p>
      {movie.Awards !== 'N/A' && <span className={styles.genres}>Awards: {movie.Awards}</span>}
      <div className={styles.images}>
        {movie.Images.map(image => {
          return <img key={image} src={image} alt="" className={styles.image} />
        })}
        
      </div>
      
    </div>
    
    
    <div className={styles.posterContainer}>
      <img src={movie.Poster} alt="/" className={styles.poster} loading='lazy' style={{ viewTransitionName: `poster-${movie.imdbID}` }}/>
      <div className={styles.rating}>{movie.imdbRating}</div>
    </div>
  </div>
  </div>
}

export default MovieDetails