import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  const [name, setName] = useState(false);

  function show() {
    setName(true);
  }

  return (
    <div>
      <form className="create-note">
        {name && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={name ? "3" : "1"}
          onClick={show}
        />
        {name && <Zoom in={true}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab> 
        </Zoom> }
        
        
      </form>
    </div>
  );
}

export default CreateArea;
