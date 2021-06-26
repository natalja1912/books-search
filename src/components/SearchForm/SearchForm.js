import React from "react";
import { connect } from "react-redux";
import { LocalForm, Control, Errors } from "react-redux-form";
import { addQuery } from "../../redux/actions/index";
import "./SearchForm.css";

function SearchForm({ dispatch }) {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  function handleChange(values) {
    dispatch(addQuery(values.query));
  }

  return (
    <section className="search">
      <LocalForm
        onChange={(values) => handleChange(values)}
        className="search__form"
      >
        <Control.text
          className="search__input"
          model=".query"
          name="query"
          id="query"
          placeholder="Введите название книги"
          validators={{
            required,
            minLength: minLength(1),
            maxLength: maxLength(20)
          }}
        />
        <Errors
          className="search__error"
          model=".query"
          show="touched"
          messages={{
            required: "Required. ",
            minLength: "Must be greater than 1 character",
            maxLength: "Must be 20 characters or less"
          }}
        />
      </LocalForm>
    </section>
  );
}

export default connect(null, null)(SearchForm);
