import React, { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import Listitems from "../components/Listitems";
const NotesListPages = () => {
  let [notes, setNote] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let responce = await fetch("/api/notes/");
    let data = await responce.json();
    console.log("Data:", data);
    setNote(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <Listitems key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPages;
