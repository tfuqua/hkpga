import React from 'react';

function Pager(props) {
  let pages = buildPager(props.query);

  return (
    <div className="text-center">
      <nav>
        <ul className="pagination">

          <li className={props.query.first ? 'disabled' : ''}>
            <a onClick={props.changePage.bind(this, 1)}>
              <span aria-hidden="true">First</span>
            </a>
          </li>
          <li className={props.query.first ? 'disabled' : ''}>
            <a onClick={props.changePage.bind(this, props.query.current - 1)}>
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>
          {pages.map((page, i) => (
            <li key={i} className={page === props.query.current ? 'active' : ''}>
              <a onClick={props.changePage.bind(this, page)}>{page}</a>
            </li>
          ))}
          <li className={props.query.last ? 'disabled' : ''}>
            <a onClick={props.changePage.bind(this, props.query.current + 1)}>
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>
          <li className={props.query.last ? 'disabled' : ''}>
            <a onClick={props.changePage.bind(this, props.query.totalPages)}>
              <span aria-hidden="true">Last</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function buildPager(props) {
  //TODO this is messy and should be refactored
  let pages = [];
  let i = 1;
  let totalPages = props.totalPages;

  if (props.totalPages > 7) {
    if (props.current > 3) {
      if (props.totalPages - props.current < 4) {
        i = props.totalPages - 7;
        totalPages = props.totalPages;
      } else {
        i = props.current - 3;
        totalPages = props.current + 4;
      }
    } else {
      i = 1;
      totalPages = 7;
    }
  }

  for (i; i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
}

export default Pager;
