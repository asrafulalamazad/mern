import React, {useEffect, useState} from 'react';
import {Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";

const ListTable = () => {

    let [DataList, setDataList]= useState([]);

   useEffect(()=>{
        Read().then((Result)=>{
            setDataList(Result)

        })
   },[]);
   if(DataList.length>0){
       return (

       <div className='container'>
           <table className='table table-responsive-md table-striped'>
               <thead>
               <tr>
                   <th>Seril No</th>
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
                               <td><img className="w-50 h-auto" src={item.Img}/> </td>
                               <td>{item.UnitPrice}</td>
                               <td>{item.Qty}</td>
                               <td>{item.TotalPrice}</td>

                               <td>
                                   <button className="btn btn-primary m-2">Update</button>
                                   <button className="btn btn-danger m-2">Delete</button>
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

export default ListTable;