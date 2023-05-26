import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/setting-slice";
// import React from "react";

const BaseURL="https://task-manager-power-ecare.onrender.com/api/v1"

export  function RegistrationRequest(email,firstName,lastName,mobile,password,photo) {
    store.dispatch(ShowLoader());
    let URL= BaseURL+"/registration"
    let  PostBody = {email:email, firstName:firstName, lastName:lastName,mobile:mobile,password:password,photo:photo}


   return  axios.post(URL,PostBody).then((res)=>{
       store.dispatch(HideLoader());

        if(res.status===200){
            if (res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }

        else {
            debugger
            SuccessToast("Registration Success ok")
            return true;
         }
        }
    }).catch((err)=>{
       debugger
       store.dispatch(HideLoader());
       ErrorToast("Something Wrong = error ")
        return false;
    })
}

