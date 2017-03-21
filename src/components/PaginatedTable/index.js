import React, { Component } from "react";
import { orderBy } from "lodash";
import { mapObjectToArray } from "../../util/util";
import Loader from "../Loader";
import Pager from "./Pager";

class PaginatedTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.fetch({ page });
  }

  render() {
    return (
      <div>
        <div className={this.props.isFetching ? "fetching" : "fetched"}>
          {this.props.isFetching
            ? <div className="loader-container"><Loader /></div>
            : <div />}
          {React.cloneElement(this.props.component, {
            data: mapObjectToArray(this.props.query.data)
          })}
        </div>

        <Pager query={this.props.query} changePage={this.changePage} />
        <div className="text-right">
          {this.props.query.numberOfResults} Results
        </div>
      </div>
    );
  }
}

export default PaginatedTable;
