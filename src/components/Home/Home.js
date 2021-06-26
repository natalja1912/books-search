import { useState } from "react";
import { connect } from "react-redux";
import { SearchForm, ErrorText, BooksList, Preloader } from "../index";
import BOOKS_PER_PAGE from '../../utils/constants'
import "./Home.css";

function Home({ isLoading, errMess, books }) {
  const [pageNumber, setPageNumber] = useState(1);
  const visibleBooks = books.slice(0, BOOKS_PER_PAGE * pageNumber);
  const pagesNumber = Math.floor(books.length / 20);

  function handleShowMoreBtn() {
    setPageNumber((prev) => prev + 1);
  }

  return (
    <div className="main">
      <h1 className="main__heading">Поиск книг</h1>
      <SearchForm />
      {isLoading && <Preloader />}
      {errMess && <ErrorText text={errMess} />}
      {books && books.length !== 0 && !errMess && (
        <BooksList books={visibleBooks} />
      )}
      {pageNumber < pagesNumber && !errMess && (
        <button className="main__more-btn" onClick={handleShowMoreBtn}>
          Показать еще
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    isLoading: state.books.isLoading,
    errMess: state.books.errMess
  };
};

export default connect(mapStateToProps)(Home);
