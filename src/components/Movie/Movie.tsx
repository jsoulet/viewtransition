import Image from "next/image";
import styles from './styles.module.css'

interface Props {
  id: string;
  title: string;
  image: string;
  release: Date;
  rating: string;
  genres: string[];
}

function Movie({ title, image, release, rating, genres, id}: Props) {
  return <div className={styles.movie} style={{ viewTransitionName: `container-${id}` }}>
    <div className={styles.posterContainer}>
      <img src={image} alt="" className={styles.poster} loading="lazy" style={{
        viewTransitionName: `poster-${id}`,
      }}/>
    </div>
    <div className={styles.data}>
      <h2 className={styles.title} style={{ viewTransitionName: `title-${id}` }}>{title}</h2>
      <div className={styles.genres}>{ genres.join(' / ')}</div>
      <div className={styles.year}>{ release.toLocaleDateString('fr') }</div>
      <div className={styles.rating}> { rating } </div>
    </div>
  </div>
}

export default Movie