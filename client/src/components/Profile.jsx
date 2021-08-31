import React, {useState} from "react";
import ProfileCard from "./ProfileCard";
import ProfileUpdateForm from './ProfileUpdateForm'


const Profile = () => {
  const [showUpdate, setUpdateShow] = useState(false)
  return (
    <>
      <ProfileCard showUpdate={setUpdateShow}/>
      {showUpdate ? 
        <ProfileUpdateForm showUpdate={setUpdateShow} />
        :
        null
      }
    </>
  );
};

export default Profile;
