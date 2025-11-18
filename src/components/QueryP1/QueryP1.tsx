import { useQuery, keepPreviousData } from "@tanstack/react-query";
import css from "./QueryP1.module.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import SearchForm from "../SearchForm/SearchForm";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../../services/articleService";
const QueryP1 = () => {
  const [topic, setTopic] = useState("");
  const [page, setPages] = useState(1);
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", topic, page],
    queryFn: () => fetchArticles(topic, page),
    enabled: topic !== "",
    placeholderData: keepPreviousData,
  });
  const handleSearch = (topic: string) => {
    setTopic(topic);
    setPages(1);
  };
  const handlePageClick = ({ selected }: { selected: number }) => {
    setPages(selected + 1);
  };
  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops...try againg later.</p>}
      {isSuccess && (
        <>
          <ArticleList items={data?.hits} />{" "}
          <ReactPaginate
            // initialPage={page}
            breakLabel="..."
            nextLabel=" >"
            containerClassName={css.pagination}
            activeLinkClassName={css.activePage}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={data?.nbPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </>
      )}
    </>
  );
};

export default QueryP1;
