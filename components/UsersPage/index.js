
import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./user";
import { loadData } from "@/reducers/userData";
import { useDispatch, useSelector } from "react-redux";
import MyPagination from "./myPagination";
import ContentLoader from "react-content-loader";
import NextButton from "./nextButton";


function UsersPage() {
  // const [usersData, setUsersData] = useState([]);
  const [loading ,setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const userObj= useSelector((state) => state.users);

  const getUsersData = ({page}) => {
    setLoading(true)
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: page,
        },
      })
      .then(function (res) {
        console.log("===res.data===", res.data);
        dispatch(loadData(res.data));
        setLoading(false)
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          setError(error.message)
          setLoading(false)

        }
      });
  };

  useEffect(() => {
    getUsersData({page :1});
  }, []);


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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quae dolore dolores doloribus tempore velit excepturi
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
                   {userObj.data.map((userData) => {
                return <User key={userData.id} data={userData} />;
              })}
                </div>
              
                
              </div>
            )}
          </div>
        </div>
        {<NextButton
          totalPages={userObj.totalPages}
          getUsersData={getUsersData}
          currentPage={userObj.currentPage}
        /> }
        {/* {<MyPagination
        totalPages = {userObj.totalPages}
        currentPage = {userObj.currentPage}
        getUsersData = {getUsersData}/>} */}
      </div>
    </section>
  );
}
          
          
export default UsersPage;