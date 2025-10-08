import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { MoonLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import { USERS_API } from "../resources/api";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const [userDetail, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getaUser = async () => {
      const response = await fetch(USERS_API + params.id);
      const users = await response.json();
      if (!users) {
        console.log("Users not showing");
      } else {
        setUserDetail(users);
        setIsLoading(false);
      }
    };
    getaUser();
  });

  return (
    <>
      <Navbar />
      <div className="m-4">
        <h1 className="text-3xl">User Detail</h1>
        <div>
          {isLoading ? (
            <div className="mt-4">
              <MoonLoader size={60} color="purple" />
            </div>
          ) : (
            <div className="mt-4">
              <UserCard user={userDetail} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
