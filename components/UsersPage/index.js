import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import User from "./user";

function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsersData = (page = 1) => {
    setLoading(true);
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page,
        },
      })
      .then(function (res) {
        setUsersData(res.data.data);
        setError(null);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsersData(pageNumber);
  };

  const UserContentLoader = () => (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
      <rect x="0" y="20" rx="3" ry="3" width="220" height="10" />
      <rect x="0" y="40" rx="3" ry="3" width="180" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="120" height="10" />
    </ContentLoader>
  );

  return (
    <section className="user-list my-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>User List</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quae dolore dolores doloribus tempore velit excepturi
              exercitationem!
            </p>
          </div>
          <div className="col">
          
            {loading ? (
              <UserContentLoader />
            ) : error ? (
              <div className="text-center text-danger">
                Error: {error}. Please try again.
              </div>
            ) : (
              <div>
                <div className="candidate-list">
                   {usersData.map((userData) => {
                return <User key={userData.id} data={userData} />;
              })}
                </div>
              
                <Pagination className="mt-3">
                  <Pagination.First onClick={() => handlePageChange(1)} />
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === 2}
                  />
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default UsersPage