import React from "react";

import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({ data, OnDelete, onImportant, onLike }) => {
  const elem = data.map((item) => {
    if (typeof item === "object" && isEmpty(item)) {
      const { key, ...ItemPost } = item;
      return (
        <li key={key} className="list-group-item">
          <PostListItem
            {...ItemPost}
            OnDelete={() => OnDelete(key)}
            onImportant={() => onImportant(key)}
            onLike={()=> onLike(key)}
          />
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
