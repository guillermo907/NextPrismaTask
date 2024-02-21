"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";

type TaskInputProps = {
  postNote: (title: string, content: string) => void;
  isEdit?: boolean;
  noteValues?: { title: string; content: string };
};

const TaskInput: React.FC<TaskInputProps> = ({
  postNote,
  isEdit = false,
  noteValues = { title: "", content: "" },
}) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: noteValues?.title,
    content: noteValues?.content,
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setForm({ title: "", content: "" });
  };

  const handleTaskSubmit = () => {
    postNote(form.title, form.content);
    setOpen(false);
    resetForm();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Stack
            className=""
            spacing={3}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "var(--border-radius)",
              minWidth: "400px",
              padding: "15px",
              background: "var(--card-background)",
              backgroundSize: "300%",
            }}
          >
            <h1>New note</h1>
            <TextField
              id="outlined-basic"
              label="Title"
              placeholder=""
              color="secondary"
              variant="outlined"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Content"
              placeholder=""
              color="secondary"
              variant="outlined"
              multiline
              minRows={3}
              name="content"
              value={form.content}
              onChange={handleChange}
            />
            <Stack direction={"row"} spacing={2} justifyContent={"end"}>
              <Button
                color="error"
                sx={{ alignSelf: "flex-end" }}
                onClick={() => {
                  setOpen(false);
                  resetForm();
                }}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ alignSelf: "flex-end", fontWeight: "bold" }}
                onClick={handleTaskSubmit}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </form>
      </Modal>
      <Fab
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ position: "absolute", bottom: "60px", right: "30px" }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default TaskInput;
