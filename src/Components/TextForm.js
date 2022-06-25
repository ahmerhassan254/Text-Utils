import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into upper case!!!", "success");
  }
  function handleDownClick() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into lower case!!!", "success");
  }
  function handleClear() {
    setText("");
    props.showAlert("Text is cleared!!!", "success");
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  function handleCopy() {
    const text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!!!", "success");
  }
  function handleExtraSpaces() {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces have been removed!!!", "success");
  }
  return (
    <div
      className="container"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="textarea"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#1c1c1c",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleUpClick}
        disabled={text.length === 0}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleDownClick}
        disabled={text.length === 0}
      >
        Convert to Lower case
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleClear}
        disabled={text.length === 0}
      >
        Clear Text
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleCopy}
        disabled={text.length === 0}
      >
        Copy Text
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleExtraSpaces}
        disabled={text.length === 0}
      >
        Remove Extra Space
      </button>
      <div className="container my-5">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
      </div>
      <div className="container my-5">
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the text box to preview it here"}
        </p>
      </div>
    </div>
  );
}
