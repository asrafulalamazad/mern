import React, {useRef} from 'react';

const HomeBanner = () => {
    let userName= useRef();
    let password= useRef();

    const submitForm=()=> {
        let user = userName.current.value;
        let passKey = password.current.value;
        alert("user: "+user);
        alert("Password: "+passKey);
    }


    return (
        <div>
            <input ref={userName} placeholder="User Name" type="text"/>
            <input ref={password} placeholder="Password" type="password"/>
            <button onClick={submitForm}>Get Data</button>
        </div>
    );
};

export default HomeBanner;





















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