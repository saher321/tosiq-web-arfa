import React, { useEffect, useState } from 'react'

const Users = () => {
    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        const getaUser = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            if(!users){
                console.log("Users not showing");
            } else {
                setUserList(users);
            }
        }
        getaUser();
    })
    
  return (
    <div>
        <h1>Users</h1>
            {userList.length > 0 ?
            <ul>
                {userList.map((user, i)=>{
                    return(
                        <li key={i}>{user.name}</li>
                    )
                })}
            </ul> : "No users were found"
            }
    </div>
  )
}

export default Users