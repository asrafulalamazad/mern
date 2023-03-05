import React, {useEffect, useState} from 'react';
import axios from "axios";

const HomeBanner = () => {

    const [Todo, setTodo]=useState("Data loading");

    useEffect(()=>{

        //     api calling
        axios.get("https://jsonplaceholder.typicode.com/todos/").then((res)=>{
            setTodo(res.data)
        })

            .catch((err)=>{});


    },[])


    const myList=Todo.map((list,i)=>{
        return(
            <tr>
                <td>{list["userID"]}</td>
                <td>{list["id"]}</td>
                <td>{list["title"]}</td>
            </tr>
        );

    })

    return (
        <div>
            <table>
                {myList}
            </table>
        </div>
    );
};

export default HomeBanner;

// import React, {useState} from 'react';
//
// const HomeBanner = () => {
//
//     const [color, setColor]=useState("pink")
//
//
//    if(color==="red"){
//        return (
//            <div>
//                <h1 style={{color:"red"}}> Color is Red</h1>
//            </div>
//        );
//    }
//    else if (color==="pink"){
//        return (
//            <div>
//                <h1 style={{color:"orange"}}> Color is Red</h1>
//            </div>
//        );
//    }
//    else {
//        return (
//            <div>
//                <h1 style={{color:"gray"}}> Color is Red</h1>
//            </div>
//        );
//    }
//
// };
//
// export default HomeBanner;
//
//



// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
// const HomeBanner = () => {
//
//     const [todo, setTodo]= useState("Please Wait")
//
//
//     useEffect(()=>{
//
//         // api calling
//         axios.get("https://jsonplaceholder.typicode.com/todos/")
//             .then((res)=>{
//                 setTimeout(
//                     ()=>{                setTodo(res.data)
//                     },3000
//                 )
//
//                 // alert(res.status);
//                 // alert(res.data);
//             })
//             .catch((error)=>{
//             })
//
//         //alert("Welcome")
//
//     })
//
//
//     return (
//         <div>
//             {JSON.stringify(todo)}
//         </div>
//     );
// };
//
// export default HomeBanner;






// import React, {useRef} from 'react';
//
// const HomeBanner = () => {
//     let userName= useRef();
//     let password= useRef();
//
//     const submitForm=()=> {
//         let user = userName.current.value;
//         let passKey = password.current.value;
//         alert("user: "+user);
//         alert("Password: "+passKey);
//     }
//
//
//     return (
//         <div>
//             <input ref={userName} placeholder="User Name" type="text"/>
//             <input ref={password} placeholder="Password" type="password"/>
//             <button onClick={submitForm}>Get Data</button>
//         </div>
//     );
// };
//
// export default HomeBanner;























// import React, {useState} from 'react';
//
// const HomeBanner = (props) => {
//     const [Home, setColor]=useState("Welcome to react")
//     const title = ()=>{
//         setColor(props.title)
//
//     }
//     const subTitle = ()=> {
//         setColor(props.subtitle)
//     }
//
//     return (
//         <div>
//             <h1>{Home}</h1>
//             <button onClick= {title}>Change</button>
//             <button onClick= {subTitle}>Change</button>
//
//         </div>
//     );
// };
//
// export default HomeBanner;