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
        {
          label: "Напиши что-нибудь...",
          important: false,
          like: false,
          key: 1,
        },
      ],
      term: "",
      filter: "all",
    };
    this.DeleteItem = this.DeleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onUpdateFilter = this.onUpdateFilter.bind(this);

    this.maxKey = 2;
  }

  DeleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.key === id);
      const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
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

  onImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.key === id);

      const old = data[index];
      const nwItem = { ...old, important: !old.important };

      const newsArray = [
        ...data.slice(0, index),
        nwItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newsArray,
      };
    });
  }

  onLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.key === id);

      const old = data[index];
      const nwItem = { ...old, like: !old.like };

      const newsArray = [
        ...data.slice(0, index),
        nwItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newsArray,
      };
    });
  }

  onSearch(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  onFilter(items, filter) {
    if (filter === "like") {
      return items.filter((item) => {
        return item.like;
      });
    } else {
      return items;
    }
  }

  onUpdateFilter(filter) {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;

    const numLikes = data.filter((item) => item.like === true).length;
    const allPost = data.length;

    const visiblePost = this.onFilter(this.onSearch(data, term), filter);

    return (
      <div className="app">
        <AppHeader numLikes={numLikes} allPost={allPost} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onUpdateFilter={this.onUpdateFilter}
          />
        </div>
        <PostList
          data={visiblePost}
          OnDelete={this.DeleteItem}
          onImportant={this.onImportant}
          onLike={this.onLike}
        />
        <PostAddForm addItem={this.addItems} />
      </div>
    );
  }
}
