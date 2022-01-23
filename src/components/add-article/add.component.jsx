import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function AddArticle({
  handleClose,
  open,
  handleAdd,
  handleChange,
  categoryIndex,
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new Article</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new article to the group, please fill the inputs!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Article Tile"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            onChange={handleChange}
          />
          <TextField
            name="content"
            autoFocus
            margin="dense"
            id="name"
            label="Article Content"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            name="description"
            autoFocus
            margin="dense"
            id="name"
            label="Article description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            name="image"
            autoFocus
            margin="dense"
            id="name"
            label="Article image URL"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            name="time"
            autoFocus
            margin="dense"
            id="name"
            label="Article time to read"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleAdd(categoryIndex)}>add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
