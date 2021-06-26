import React from "react";
import "./ErrorText.css";

function ErrorText({ text }) {
  return (
    <div className="error">
      <div>{text}</div>
    </div>
  );
}

export default ErrorText;
