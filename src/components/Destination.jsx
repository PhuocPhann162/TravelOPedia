import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationAPI";
import { useState } from "react";
import { useUpdateDestinationMutation } from "../api/destinationAPI";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();

  const [isUpdate, setIsUpdate] = useState(false);
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const handleUpdateClick = () => {
    setIsUpdate(true);
    setInputCity(destination.city);
    setInputCountry(destination.country);
  };
  const handleCancelClick = () => {
    setIsUpdate(false);
  };

  const handleUpdateButton = () => {
    updateDestination({
      id: destination.id,
      city: inputCity,
      country: inputCountry,
      daysNeeded: destination.daysNeeded,
    });
    setInputCity("");
    setInputCountry("");
    setIsUpdate(false);
  };

  return (
    <div>
      <div className="row text-center text-white-50 p-2 border border-secondary mt-2">
        <div className="col-3 col-md-2 offset-md-2 p-2 text-end">
          {!isUpdate ? (
            <span>{destination.city}</span>
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder="City..."
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
            />
          )}
        </div>
        <div className="col-2 col-md-2 p-2">
          {!isUpdate ? (
            <span>{destination.country}</span>
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder="Country..."
              value={inputCountry}
              onChange={(e) => setInputCountry(e.target.value)}
            />
          )}
        </div>
        <div className="col-1 text-warning p-2">
          {destination.daysNeeded} days
        </div>
        <div className="col-6 col-md-3">
          {!isUpdate ? (
            <button onClick={handleUpdateClick} className="btn btn-warning">
              Edit
            </button>
          ) : (
            <span>
              <button onClick={handleCancelClick} className="btn btn-warning">
                Cancel
              </button>{" "}
              &nbsp;
              <button onClick={handleUpdateButton} className="btn btn-info">
                Update
              </button>
            </span>
          )}
          &nbsp;&nbsp;
          <button
            onClick={() => deleteDestination({ id: destination.id })}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destination;
