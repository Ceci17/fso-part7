import React from "react";
import Input from "./Input";

import { useField } from "../hooks";

const CreateNew = ({ addNew }) => {
  const content = useField("content");
  const author = useField("author");
  const info = useField("info");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
  };

  const handleReset = (event) => {
    event.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <Input {...content} />
        </div>
        <div>
          author
          <Input {...author} />
        </div>
        <div>
          url for more info
          <Input {...info} />
        </div>
        <button type="submit">create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
