import React, { Fragment, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { deleteUser, getAllUsers } from "./FetchApi";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let response = await getAllUsers();
      let usersData = response?.Users || [];
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await deleteUser(_id);
      if (response.success) {
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Button size="lg" className="" variant="success" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
          Loading...
        </Button>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td className="p-2 text-left">{user.name}</td>
                  <td className="p-2 text-left">{user.email}</td>
                  <td className="p-2 flex items-center justify-center">
                    <span
                      onClick={() => handleDelete(user._id)}
                      className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
                    >
                      <MdDelete className="w-6 h-6 fill-current text-red-500" />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-xl text-center font-semibold py-8"
                >
                  No user found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {users && users.length} users found
        </div>
      </div>
    </Fragment>
  );
};

export default AllUsers;
