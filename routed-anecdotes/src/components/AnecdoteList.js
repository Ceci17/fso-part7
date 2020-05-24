import React from "react";
import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes, notification }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && <p>{notification}</p>}
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
