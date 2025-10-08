import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white/50 rounded p-3">
      <div>{user.name}</div>
      <div className="my-1 p-1 rounded-full border border-purple-500 bg-purple-500/40 max-w-max text-[10px] text-gray-600 text-black">
        @{user.username}
      </div>
      <div className="text-[10px] text-gray-600">
        <GrMapLocation className="inline -mt-1 mr-1" /> {user.address.street},{" "}
        {user.address.city}
      </div>
      <div className="mt-4 text-[11px]">
        <div>
          <MdAlternateEmail className="inline -mt-1 mr-1" /> {user.email}
        </div>
        <div>
          <BsTelephone className="inline -mt-1 mr-1"  /> {user.phone}
        </div>
        <div>
          <BsGlobe className="inline -mt-1 mr-1"  /> {user.website}
        </div>
        <div>
          <TbBuildingSkyscraper className="inline -mt-1 mr-1"  /> {user.company.name}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
