import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";

const BaseURL="https://task-manager-power-ecare.onrender.com/api/v1"


export  function RegistrationRequest(email,firstName,lastName,mobile,password,photo) {

    let URL= BaseURL+"/registration"
    let  PostBody = {email:email, firstName:firstName, lastName:lastName,mobile:mobile,password:password,photo:photo}


   return  axios.post(URL,PostBody).then((res)=>{

        if(res.data['status']==="fail"){
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
            SuccessToast("Registration Success")
            return true;
        }
    }).catch((err)=>{
        ErrorToast("Something Wrong")
        return false;
    })
}


