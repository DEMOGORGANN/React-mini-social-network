import React, { Component } from "react";

import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.button = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравилось" },
    ];
  }
  render() {
    const but = this.button.map(({ name, label }) => {
      const { filter, onUpdateFilter } = this.props;
      const active = filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onUpdateFilter(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{but}</div>;
  }
}
