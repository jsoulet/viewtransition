"use client";
import Toggle from "@/components/Toggle";
import Movie from "@/components/Movie";
import styles from "./layout.module.css";
import { useState } from "react";
import movies from "./movies.json";
import Link from "next/link";
import "./global.css";

function MoviesPage() {
  const [isChecked, setIsChecked] = useState(false);
  const genres = movies.reduce((acc, movie) => {
    movie.Genre.split(", ").forEach((genre) => {
      if (!acc.includes(genre)) {
        acc.push(genre);
      }
    });
    return acc;
  }, [] as string[]);
  return (
    <div style={{ padding: "1rem" }}>
      <div className={styles.toggleContainer}>
        <Toggle isChecked={isChecked} onChange={() => setIsChecked((checked) => !checked)} />{" "}
        <span className={styles.toggleLabel}>Series only</span>
      </div>
      <div className={styles.movies}>
        {movies
          .filter((movie) => (isChecked ? movie.Type === "series" : true))
          .map((movie) => (
            <Link
              href={`/movies/${movie.imdbID}`}
              key={movie.imdbID}
              style={{
                viewTransitionName: `movie-${movie.imdbID}`,
              }}
            >
              <Movie
                id={movie.imdbID}
                title={movie.Title}
                image={movie.Poster}
                release={new Date(movie.Released)}
                rating={movie.imdbRating}
                genres={movie.Genre.split(",")}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MoviesPage;
