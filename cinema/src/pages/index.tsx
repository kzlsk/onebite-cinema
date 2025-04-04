import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: { allMovies, recoMovies },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <h3>지금 가장 추천하는 영화</h3>
      <section className={style.recommended_movies}>
        {recoMovies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
      <h3>등록된 모든 영화</h3>
      <section className={style.all_movies}>
        {allMovies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
