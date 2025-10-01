import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { MoonLoader } from 'react-spinners';

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getaUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      if (!users) {
        console.log("Users not showing");
      } else {
        setUserList(users);
        setIsLoading(false);
      }
    };
    getaUser();
  });

  return (
    <div className="m-4">
      <h1 className="text-3xl">Users</h1>
      <div>
        {isLoading ? (
          <div className="mt-4">
            <MoonLoader size={60} color="purple" />
          </div>
        ) : (
          <div>
            {userList.length > 0 ? (
              <div className="mt-3 grid grid-cols-12 gap-3">
                {userList.map((user, i) => {
                  return (
                    <div key={i} className="col-span-4">
                      <UserCard user={user} />
                    </div>
                  );
                })}
              </div>
            ) : (
              "No users were found"
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
