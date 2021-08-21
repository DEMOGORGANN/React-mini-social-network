import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "ti lox", important: false, key: "1" },
        { label: "ti l2ox", important: false, key: "2" },
        { label: "ti l5x", important: false, key: "3" },
      ],
    };
    this.DeleteItem = this.DeleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
    this.maxKey = 4;
  }

  DeleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => (elem.id = id));
      const newArray = [...data.slice(1, index), ...data.slice(index + 1)];
      return {
        data: newArray,
      };
    });
  }
  addItems(body) {
    const newItem = {
      label: body,
      important: false,
      key: this.maxKey++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList data={this.state.data} OnDelete={this.DeleteItem} />
        <PostAddForm addItem={this.addItems} />
      </div>
    );
  }
}
