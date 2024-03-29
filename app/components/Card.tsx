"use client";
import { Note } from "@/types/Note";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { useState } from "react";

type CardProps = {
  note: Note;
  deleteNote: (title: string) => void;
  updateNote: (id: number, title: string, content: string) => void;
};

const Card: React.FC<CardProps> = ({ note, deleteNote, updateNote }) => {
  console.log("Note: ", note);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form, setForm] = useState({
    title: note?.title,
    content: note.content || "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditSubmit = () => {
    updateNote(note.id, form.title, form.content);
    setIsEditMode(false);
  };

  return (
    <div className="card">
      {isEditMode && (
        <form>
          <Stack spacing={3} marginBottom={3}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <TextField
              label="Content"
              name="content"
              value={form.content as string}
              onChange={handleChange}
            />
          </Stack>
        </form>
      )}
      {!isEditMode && (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </>
      )}
      <Stack direction={"row"}>
        <Button color="error" onClick={() => deleteNote(note.title)}>
          Delete
        </Button>
        <Button color="primary" onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? "Cancel" : "Edit"}
        </Button>
        {isEditMode && (
          <Button variant="outlined" color="success" onClick={handleEditSubmit}>
            Save
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default Card;
