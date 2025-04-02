import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";
import { useRouter } from "next/router";
import style from "./search.module.css";

export default function Page() {
  const router = useRouter();
  // 검색어가 없으면 빈 문자열 처리
  const query = (router.query.q as string) || "";

  // 입력된 검색어가 포함된 영화만 필터링
  const filteredMovies = movies.filter((movie) => movie.title.includes(query));

  return (
    <div className={style.container}>
      {/* 검색어가 비어 있지 않다면 MovieItem 렌더링 /
         비어있다면 검색 결과가 없습니다 표시 */}
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => <MovieItem key={movie.id} {...movie} />)
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
