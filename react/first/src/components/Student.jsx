import React from "react";
// import propTypes from "prop-types";
function Student(props) {
  // to practes react propes
  return (
    <div className="font-sans  h-1/4 w-1/5 flex flex-col  justify-between bg-gray-800 text-white  text-center py-10 rounded-lg">
      <p className="">Name:{props.name}</p>
      <p className="">Age:{props.age}</p>
      <p className="">is Student: {props.isStudent ? "yap" : "nah"}</p>
    </div>
  );
}
// Student.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number,
//   isStudent: propTypes.bool,
// };
Student.defaultPropes={
  name:"unknown",
  age:0,
  isStudent:false,
}

export default Student;
