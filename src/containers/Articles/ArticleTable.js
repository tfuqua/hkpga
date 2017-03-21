import React from "react";
import Text from "../../components/Text";
import { Link } from "react-router-dom";
import { FormattedDate } from "react-intl";

function ArticleTable(props) {
  let data = props.data ? props.data : [];
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((article, i) => (
          <tr key={i}>
            <td style={{ width: "50%" }}>
              <Text text={article.title} />
            </td>
            <td>{article.author}</td>
            <td>
              <FormattedDate
                value={new Date(article.publish_date)}
                year="numeric"
                month="long"
                day="2-digit"
              />
            </td>
            <td>
              <Link
                className="btn btn-default"
                to={`/admin/articles/${article.id}`}
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ArticleTable;
