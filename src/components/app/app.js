import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

const App = () => {
  const data = [
    { label: "ti lox", key: "sfddfgfd" },
    { label: "ti l2ox", key: "sfdgdfg" },
    { label: "ti l5x", key: "sfdcvb" },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList data={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
