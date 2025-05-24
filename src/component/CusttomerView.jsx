import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetCustomers  } from "../slices/CustomerSlice";
function CustomerView(){
   const customers =  useSelector((state)=> state.Customers)

  const dispatch = useDispatch();

  const reSet =() =>{
    dispatch(resetCustomers(customers))
  }
    return(
        <>
          {
customers.length>0 &&  
        <div className="card mt-5 w-50 text-bg-secondary mx-auto">
        <h1 className="my-3">Customer List</h1>
        
<ul style={{listStyle:"none"}}>
        
        { 
            customers.map((user,index)=> (
                <> 
            <li key={index}>{user}</li>

            </>
        ))
            
        }
        </ul>
      <button className="btn btn-info mx-auto w-25 my-3" onClick={reSet}>Reset</button>

      
        </div>
          }
        </>
    )
}

export default CustomerView;