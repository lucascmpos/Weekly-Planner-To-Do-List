import React from "react";

const Days = (props) => {
  const data = props.data;


  return(
   <h1 className="Days">{data.dayName}</h1>
   )
};

export default Days;
