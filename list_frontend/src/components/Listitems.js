import React from "react";
import { Link } from "react-router-dom";

let getTime = (note) => {
  let time = new Date(note.updated);
  return time.toLocaleDateString() + "  -  " + time.toLocaleTimeString();
};

let getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

const Listitems = ({ note }) => {
  return (
    <Link to={`/note/${note.id}/`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
        </p>
      </div>
    </Link>
  );
};

export default Listitems;
