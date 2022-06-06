import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { getPosts } from "../Js/Actions/PostActions";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getPosts());
    }, // eslint-disable-next-line
    []
  );

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    497: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts.map((post) => (
        <div item xs={12} sm={6} md={3} key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </Masonry>
  );
};

export default Posts;
