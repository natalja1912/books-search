import React from "react";
import Book from "../Book/Book";
import "./BooksList.css";

const BooksList = ({ books }) => (
  <div className="bookslist">
    <ul className="bookslist__list">
      {books &&
        books.map((item) => (
          <li className="bookslist__item">
            <Book book={item} />
          </li>
        ))}
    </ul>
  </div>
);

export default BooksList;
