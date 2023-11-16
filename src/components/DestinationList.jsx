import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationAPI";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <article key={destination.id}>
          <div className="row text-center text-white-50 p-2 border border-secondary mt-2">
            <div className="col-3 col-md-2 offset-md-2 p-2 text-end">
              {destination.city}
            </div>
            <div className="col-2 col-md-1 p-2">{destination.country}</div>
            <div className="col-3 col-md-2 text-warning text-end p-2">
              {destination.daysNeeded} days
            </div>
            <div className="col-4">
              <button className="btn btn-warning">Edit</button> &nbsp;
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
