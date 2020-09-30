import React from 'react';


const noteTitle = "This is a note title";
const noteText = "this is the note content";

function Note() {
return <div className="note">
            <h1>{noteTitle}</h1>
            <p>{noteText}</p>
        </div>;
}

export default Note;