import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import movies from "@/mock/dummy.json";

export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        {/* slice()를 사용해 특정 개수만 잘라서 불러오기 */}
        {movies.slice(0, 3).map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        {/* slice()를 사용해 특정 개수만 잘라서 불러오기 */}
        {movies.slice(0, 5).map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
