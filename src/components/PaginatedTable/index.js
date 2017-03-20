import React, { Component } from "react";
import { orderBy } from "lodash";
import { mapObjectToArray } from "../../util/util";
import Pager from "./Pager";

class PaginatedTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.prepareState();
    this.sortData = this.sortData.bind(this);
  }

  prepareState() {
    let data = mapObjectToArray(this.props.data);

    return {
      sortOrder: "desc",
      count: data.length,
      pages: data.length / 10,
      page: 1,
      data: data.slice(0, 10)
    };
  }

  sortData(prop) {
    let sortOrder = this.state.sortOrder === "desc" ? "asc" : "desc";
    let data = this.dynamicSort(prop, sortOrder);
    this.setState({ data, sortOrder });
  }

  dynamicSort(prop, sortOrder) {
    let test = orderBy(this.state.data, [prop], [sortOrder]);
    return test;
  }
  changePage() {}

  render() {
    return (
      <div>
        {React.cloneElement(this.props.component, {
          data: this.state.data,
          sort: this.sortData
        })}

        <Pager
          changePage={this.changePage}
          first={false}
          last={false}
          current={this.state.page}
          totalPages={this.state.pages}
        />
      </div>
    );
  }
}

export default PaginatedTable;
