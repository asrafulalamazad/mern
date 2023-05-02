import axios from "axios";

export function Create (ProductName,ProductCode, Img, Qty, UnitPrice, TotalPrice  ){
    let URL="api/v1/InsertProduct";
    let PostPody= {
        ProductName:ProductName,
        ProductCode: ProductCode,
        Img:Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
   return  axios.post(URL,PostPody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;

    })
}

export function Read (){
    let URL="api/v1/ReadProduct";
    return axios.post(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;

    })
}
export function ReadByID (id){
    let URL="api/v1/ReadProductByID"+id;
    return axios.post(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;

    })
}



export function Delete (id){
    let URL="api/v1/InsertProduct/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return true;
        }
        else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;

    })
}
export function Update (id,ProductName,ProductCode, Img, UnitPrice, Qty, TotalPrice){
    let URL="api/v1/DeleteProduct/"+id;
    let PostPody= {
        ProductName:ProductName,
        ProductCode: ProductCode,
        Img:Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    return  axios.post(URL,PostPody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;

    })

}
