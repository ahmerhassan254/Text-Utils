import React from "react";

function Alert({ alert }) {
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <strong>{alert.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;

/*
to captialize only first letter and not the whole word which you are getting from something not writing
const Captialize=(word)=>{
const lower = word.toLowerCase();
return lower(0).toUpperCase + lower.slice(1)
}
*/
