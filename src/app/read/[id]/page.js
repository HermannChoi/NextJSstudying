import React from "react";

function page(props) {
  return (
    <>
      <h1>READ</h1>
      parameters : {props.params.id}
    </>
  );
}

export default page;
