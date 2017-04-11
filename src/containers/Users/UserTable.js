import React from 'react';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';

function UserTable(props) {
  let users = props.results ? props.results : [];
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Committee</th>
          <th>Honorary</th>
          <th>isAdmin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td><Text text={user.name} /></td>
            <td>{user.email}</td>
            <td>{user.committee}</td>
            <td>{user.honorary}</td>
            <td>{user.isAdmin ? 'yes' : 'no'}</td>
            <td>
              <Link to={`/admin/users/${user.id}`}>
                <button onClick={() => props.receiveUser(user)} className="btn btn-default">
                  Edit
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
