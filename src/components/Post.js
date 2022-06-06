import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { deletePost } from "../Js/Actions/PostActions";

export default function Post({ post }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.category.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => dispatch(deletePost(post.id))}
          >
            <DeleteOutlineIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.category}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
