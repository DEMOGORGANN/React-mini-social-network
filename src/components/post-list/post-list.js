import React from "react";

import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({ data }) => {
  const elem = data.map((item) => {
    if (typeof item === "object" && isEmpty(item)) {
      const { id, ...ItemPost } = item;
      return (
        <li key={id} className="list-group-item">
          <PostListItem {...ItemPost} />
        </li>
      );
    }
    return null;
  });

  function isEmpty(obj) {
    for (const key in obj) {
      return true;
    }
    return false;
  }

  return <ul className="app-list list-group">{elem}</ul>;
};

export default PostList;
