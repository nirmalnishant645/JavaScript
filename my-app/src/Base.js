import React from 'react'

const Base = ({
    title = "BlockCypher",
    description = "",
    className = "bg-dark text-white p-4",
    children
  }) => (
    <div>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
  export default Base;
