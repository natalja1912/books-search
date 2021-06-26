import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import * as Image from '../../icons';
import { Preloader } from "..";
import "./DetailedBookView.css";

const mapStateToProps = (state) => {
    return {
        books: state.books.books,
    };
};

function DetailedBookView({ books }) {
    const { id } = useParams();
    const book = books.find(item => item.key === `/works/${id}`)
    const coverUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;

    const [isImageLoaded, setImageLoaded] = useState(false);

    function handleImageLoaded() {
        setImageLoaded(true);
    }

    return (
        <div className="book">
            <div>
                {!isImageLoaded && <Preloader text={false} />}
                {book.cover_i ? <img className="book__image" onLoad={handleImageLoaded} src={coverUrl} alt="Обложка книги" /> :
                    <Image.NoPhotoIcon />}
            </div>
            <div className="book__text-group">
                <Link className="book__link" to='/home'>На главную страницу</Link>
                <p className="book__subtitle">Название книги</p>
                <h2 className="book__title">{book.title}</h2>
                <p className="book__subtitle">Авторы книги</p>
                {book.author_name &&
                    <ul className="book__list">
                        {book.author_name.map((item, index) =>
                            <li className="book__list-item" key={index}>
                                <p className="book__text">{item}</p>
                            </li>)}
                    </ul>}
                <p className="book__subtitle">Год публикации</p>
                <p className="book__text">{book.first_publish_year}</p>

            </div>
        </div>
    );
}

export default connect(mapStateToProps)(DetailedBookView);