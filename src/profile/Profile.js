import React from "react";

export const Profile = (props) => {
 const handleName=()=> {
   alert(props.fullname)
 }
  return (
    <div>
      <h1> {props.fullname} </h1>
      <h2> {props.bio} </h2>
      <h2> {props.profession} </h2>
      {props.children}
      {handleName()}
    </div>
  );
};
export default Profile;




