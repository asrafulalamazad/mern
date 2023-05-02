import React, {useRef} from 'react';
import {ErrorToast, InfoToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import {Create} from "../../APIServices/CRUDServices";

const CreateForm = () => {

    let ProductName,ProductCode, Img,UnitPrice, Qty, TotalPrice = useRef();

    const SaveData = ()=>{
        let Product_Name = ProductName.value;
        let Product_Code = ProductCode.value;
        let Product_Img = Img.value;
        let Unit_Price = UnitPrice.value;
        let Product_Qty = Qty.value;
        let Total_Price = TotalPrice.value;

            if(isEmpty(Product_Name)){
                ErrorToast("Product Name Required")
            }
            else if (isEmpty(Product_Code)) {
                ErrorToast ("Product_Code Required")
            }
            else if (isEmpty(Product_Img)) {
                ErrorToast ("Product_Img Required")
            }
            else if (isEmpty(Unit_Price)) {
                ErrorToast ("Unit_Price Required")
            }
            else if (isEmpty(Product_Qty)) {
                ErrorToast ("Product_Qty Required")
            }
            else if (isEmpty(Total_Price)) {
                ErrorToast ("Total_Price Required")
            }
            else {
                Create(Product_Name,Product_Code,Product_Img,Unit_Price, Product_Qty,Total_Price ).then((restul)=>{
                    if (restul===true){
                        SuccessToast("Request Success")

                      ProductName.value = "";
                      ProductCode.value  = "";
                      Img.value = "";
                      UnitPrice.value = "";
                      Qty.value = "";
                      TotalPrice.value = "";
                    }
                    else {
                        ErrorToast ("Request Failed")

                    }
                })


                // SuccessToast("Success")
            }


    }

    const resetData=()=>{
        ProductName.value = "";
        ProductCode.value  = "";
        Img.value = "";
        UnitPrice.value = "";
        Qty.value = "";
        TotalPrice.value = "";
        InfoToast ("Field reset")

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label>Product Name</label>
                    <input ref={(input)=>ProductName=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Code</label>
                    <input ref={(input)=>ProductCode=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Image</label>
                    <input ref={(input)=>Img=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Unit Price</label>
                    <input ref={(input)=>UnitPrice=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Qty</label>
                    <input ref={(input)=>Qty=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Total Price</label>
                    <input ref={(input)=>TotalPrice=input} type="text" className="form-control"/>
                </div>

                {/*button start */}
                <div className="col-md-4 p-2">
                    <button onClick={SaveData} className="btn btn-outline-primary">Save Change</button>
                </div>
                <div className="col-md-4 p-2">
                    <button onClick={resetData} className="btn btn-outline-danger">Reset</button>
                    {/*button End */}
                </div>
            </div>

        </div>
    );
};

export default CreateForm;