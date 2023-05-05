import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";
import { withRouter } from "react-router";

const ListTable = (props) => {

    let [DataList, setDataList]= useState([]);

   useEffect(()=>{
        Read().then((Result)=>{
            setDataList(Result)
        })
   },[]);

   const DeleteItem= (id)=>{
       Delete (id).then((result)=>{
            if (result===true){
                SuccessToast("Delete Successful")
                props.history.push("/")
            }
            else {
                ErrorToast("Delete Failed")
            }
        })


    }

   if(DataList.length>0){
       return (
       <div className='container'>
           <table className='table table-bordered table-responsive-md table-striped'>
               <thead>
               <tr>
                   <th>Serial No</th>
                   <th>Product Name</th>
                   <th>Product Code</th>
                   <th>Image</th>
                   <th>Unit Price</th>
                   <th>Qty</th>
                   <th>Total Price</th>
                   <th>Action</th>
               </tr>
               </thead>

               <tbody>
               {
                   DataList.map((item, i)=>{
                       return(
                           <tr>
                               <td>{i+1}</td>
                               <td>{item.ProductName}</td>
                               <td>{item.ProductCode}</td>
                               <td><img className="w-50 h-auto" src={item.Img} alt="Product"/> </td>
                               <td>{item.UnitPrice}</td>
                               <td>{item.Qty}</td>
                               <td>{item.TotalPrice}</td>

                               <td>
                                   <button className="btn btn-primary m-2">Update</button>
                                   <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger m-2">Delete</button>
                               </td>
                           </tr>
                       )

                   })
               }


               </tbody>
           </table>
       </div>
       )
   }
   else {
       return (
           <div>
               <FullScreenLoader/>
           </div>
       )

   }

};

export default withRouter(ListTable);