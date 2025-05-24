import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { resetCustomers, removeCustomer } from "../slices/CustomerSlice";

function CustomerView() {
  const customers = useSelector((state) => state.Customers);
  const dispatch = useDispatch();

  const reSet = () => {
    dispatch(resetCustomers());
  };

  const handleOnClick = (user) => {
    dispatch(removeCustomer(user));
  };

  return (
    <>
      {customers.length > 0 && (
        <div className="card mt-5 w-50 text-bg-secondary mx-auto">
          <h1 className="my-3">Customer List</h1>
          <ul style={{ listStyle: "none" }}>
            {customers.map((user) => (
              <li key={user} >
                {user} &nbsp;
                <button onClick={() => handleOnClick(user)} className="btn btn-danger mb-3">Delete</button>
              </li>
            ))}
          </ul>
          <button className="btn btn-info mx-auto w-25 my-3" onClick={reSet}>
            Reset
          </button>
        </div>
      )}
    </>
  );
}

export default CustomerView;