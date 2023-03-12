import React, {Component} from 'react';

class HomeBanner extends Component {

    myClick=()=>{
        let myValue=this.myText.value;

        alert(myValue)
    }
    render() {

        return (
            <div>
                <input ref={(input)=>{this.myText=input}} className="form-control" type="text" />
                <button onClick={this.myClick} className="btn btn-outline-warning btn-danger">Submit</button>
            </div>
        );
    }
}

export default HomeBanner;

// import React, {Component} from 'react';
//
// class HomeBanner extends Component {
//     constructor() {
//         super();
//
//         this.state={
//             color: "green"
//
//         }
//
//
//     }
//     render() {
//
//        if (this.state.color==="red"){
//            return (
//                <div>
//                    <button className="btn btn-danger" >{this.state.color}</button>
//                    {/*<button className="btn btn-danger" onClick={()=>{this.setState({color:"Blue"})}}>Blue</button>*/}
//
//
//
//                    {/*<p className="h1">{this.props.title}{this.props.subtitle}</p>*/}
//                    {/*<p className="h3">Name: {this.props.info.name}, City: {this.props.info.city}</p>*/}
//                </div>
//            );
//
//        } else if (this.state.color==="green"){
//            return (
//                <div>
//                    <button className="btn btn-success" >{this.state.color}</button>
//                    {/*<p className="h2" align="center" >State: {this.state.color}</p>*/}
//                    {/*<button className="btn btn-success" onClick={()=>{this.setState({color:"green"})}}>Blue</button>*/}
//
//
//
//                    {/*<p className="h1">{this.props.title}{this.props.subtitle}</p>*/}
//                    {/*<p className="h3">Name: {this.props.info.name}, City: {this.props.info.city}</p> {/*<p className="h2" align="center" >State: {this.state.color}</p>*/}
//                    {/*<button className="btn btn-success" onClick={()=>{this.setState({color:"green"})}}>Blue</button>*/}
//
//
//
//                    {/*<p className="h1">{this.props.title}{this.props.subtitle}</p>*/}
//                    {/*<p className="h3">Name: {this.props.info.name}, City: {this.props.info.city}</p>*/}
//                </div>
//            );
//        }
//
//
//
//     }
// }
//
// export default HomeBanner;



//
//
// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
// const HomeBanner = () => {
//     const [Todo, setTodo]=useState([]);
//
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/todos/")
//             .then((res)=>{setTodo(res.data)})
//             .catch((err)=>{});
//     },[])
//
//     const DeleteEvent=(id)=>{
//         let DeleteID= "Delete ID"+ id;
//         alert(DeleteID)
//
//     }
//     const ViewEvent=(id)=>{
//         let ViewID= "view ID"+ id;
//         alert(ViewID)
//
//     }
//     const EditEvent=(id)=>{
//         let EditID= "Edit ID"+ id;
//         alert(EditID)
//
//     }
//
//
//
//
//     const myTodo= Todo.map((list,i)=>{
//         return(
//
//             <tr>
//                 <td>{list["userID"]}</td>
//                 <td>{list["id"]}</td>
//                 <td>{list["title"]}</td>
//                 <td className="btn btn-info" onClick={ViewEvent.bind(this,list["id"])}>View</td>
//                 <td className="btn btn-success" onClick={EditEvent.bind(this,list["id"])}>Edit</td>
//                 <td className="btn btn-danger" onClick={DeleteEvent.bind(this,list["id"])}>Delete</td>
//             </tr>
//         )
//
//
//     })
//     return (
//         <div>
//             <p className="h1 align-content-center">Todo List </p>
//             <table className="table table-bordered ">
//                <thead>
//                     <th>User ID</th>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <td className="btn btn-info">View</td>
//                     <td className="btn btn-success">Edit</td>
//                     <td className="btn btn-danger">Delete</td>
//                </thead>
//
//                 {myTodo}
//             </table>
//         </div>
//     );
// };
//
// export default HomeBanner;



// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
// const HomeBanner = () => {
//
//     const [Todo, setTodo]=useState("Data loading");
//
//     useEffect(()=>{
//
//         //     api calling
//         axios.get("https://jsonplaceholder.typicode.com/todos/").then((res)=>{
//             setTodo(res.data)
//         })
//
//             .catch((err)=>{});
//
//
//     },[])
//
//
//     const myList=Todo.map((list,i)=>{
//         return(
//             <tr>
//                 <td>{list["userID"]}</td>
//                 <td>{list["id"]}</td>
//                 <td>{list["title"]}</td>
//             </tr>
//         );
//
//     })
//
//     return (
//         <div>
//             {/*<table>*/}
//             {/*    {myList}*/}
//             {/*</table>*/}
//             <h1>Bangladesh</h1>
//         </div>
//     );
// };
//
// export default HomeBanner;







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