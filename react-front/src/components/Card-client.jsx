import React from "react";
import { Link } from "react-router-dom";
import "../css/card-client.css"

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
  deleteCards,
}) => {
  return (
    <div className="card-group col-12 col-md-6 col-lg-4 mt-3">
      <div className="card text-center">
        <img className="card-img-top" src={bizImage} alt={bizName} />
        <div className="card-body">
          <h3 className="card-title">{bizName}</h3>
          <p className="card-text border-top">{bizDescription}</p>
          <p className="card-text border-top">
            <b>Phone:</b>
            {bizPhone}
            <br />
            <b>Contact Address:</b>
            {bizAddress}
          </p>

          <Link
            className="btn shadow-sm"
            style={{ backgroundColor: "#7dcfb6", borderRadius: "10px"}}
            to={`/my-cards/edit/${_id}`}
          >
            Edit
          </Link>
          <button
            className="btn button-delete shadow-sm m-3 "
            style={{ backgroundColor: "rgb(17, 56, 226)", borderRadius: "10px" }}
            onClick={() => deleteCards(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
