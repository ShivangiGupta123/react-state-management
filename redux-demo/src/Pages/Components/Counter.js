import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector , useDispatch} from 'react-redux'
import {IncNum , DecNum} from '../../redux/action/action'
function Counter() {
    const myState = useSelector((state)=> state.Changenumber);
    const dispatch = useDispatch();
    const DEC = ()=>{
       //dispatch(DecNum(1));
        if(myState>0){
          const result =  dispatch(DecNum(1));
      toast.success( "Decreasing" , result , {autoclose : 5000})

        }
    };
    const INC = ()=>{

       const result1 = dispatch(IncNum(1))

      toast.success("Increasing" , result1 , {autoclose : 5000})
    }    
  return (
    
    <div className="container" style = {{backgroundColor:'#CCE5FF' , marginTop:30}}>
    <h1 style ={{textAlign:'center'}}>Increment / Decrement Counter using React and Redux</h1>
      <div className="row" style = {{marginLeft:516}} >

      <button style = {{width:10}} type="button" class="btn btn-danger" onClick={()=>DEC()}>-</button>
        <input style = {{width:200 , textAlign:'center'}} type="text" value = {myState}/>
        <button style = {{width:10}} type="button" class="btn btn-dark" onClick={()=>INC()}>+</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Counter;
