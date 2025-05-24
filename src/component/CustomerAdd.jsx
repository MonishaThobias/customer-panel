import React,{useState} from "react"
import CustomerView from "./CusttomerView";
import { addCustomer as addCustomerAction } from "../slices/CustomerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd(){
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    //const [customers,setCustomers]=useState([]);
    function addCustomer(){
        if(input){
            dispatch(addCustomerAction(input));
            setInput("")
        }
       /*  if(input){
        setCustomers((previousState)=>[...previousState, input])
        console.log(customers)
        setInput("")
        } */
    }
    return(
    <>
  
        <div className="card mx-auto w-50">
            <div className="card-header">
        <h3 className="my-3">Customer Add</h3>

            </div>
        <input type="text" className="form-control w-50 my-3 mx-auto" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={addCustomer} className="btn btn-info my-3 mx-auto w-50">Add</button>

        </div>
   
    
    </>
    );
}