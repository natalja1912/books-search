import React from "react";
import { Link } from 'react-router-dom';
import * as Image from '../../icons';
import "./Book.css";

function Book({ book }) {
  const coverUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

  return (
    <Link className="card" to={`/book/${book.key.slice(7)}`}>
      <div className="card__group">
        {book.cover_i ? <img className="card__image" src={coverUrl} alt="Обложка книги" /> :
          <Image.NoPhotoIcon />}
        <h2 className="card__title">{book.title}</h2>
      </div>
    </Link>
  );
}
export default Book;
