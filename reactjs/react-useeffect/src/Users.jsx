import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { MoonLoader } from 'react-spinners';
import { IoGridOutline } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false)

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
      <div className="flex items-center justify-between">
        <div>
          <input 
          className="bg-white/70 focus:outline-none py-1 px-3 rounded shadow"
          type="text"placeholder="Search here"/>

        </div>
        <div>
            <button 
            className="cursor-pointer shadow bg-white p-2 rounded-lg text-purple-500"
            onClick={()=>setIsGrid(!isGrid)}>
                {isGrid ? 
                <TiThMenuOutline />: 
                <IoGridOutline />
                }
            </button>
        </div>
      </div>
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
                    <div key={i} className={`${isGrid ? "lg:col-span-4 md:col-span-6 sm:col-span-6" : "col-span-12" }`}>
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
