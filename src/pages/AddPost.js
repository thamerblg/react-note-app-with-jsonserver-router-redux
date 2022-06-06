import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Js/Actions/PostActions";

const useStyles = makeStyles({
  field: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
    display: "block !important",
  },
});

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("learning");

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      category,
    };

    if (title !== "" && body !== "" && category !== "") {
      dispatch(addPost(newPost));
      setTitle("");
      setBody("");
      setCategory("");
    }
  };

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          onChange={(e) => setBody(e.target.value)}
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="learning"
              control={<Radio />}
              label="learning"
            />
            <FormControlLabel
              value="remainder"
              control={<Radio />}
              label="remainder"
            />
            <FormControlLabel value="todos" control={<Radio />} label="todos" />
            <FormControlLabel value="work" control={<Radio />} label="work" />
            <FormControlLabel
              value="entertainment"
              control={<Radio />}
              label="entertainment"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AddPost;
