import React from 'react';
import * as htmlToImage from 'html-to-image';

const App = () => {
 let saveImg = ()=>{
    let node = document.getElementById("jpg");

    htmlToImage.toJpeg(node).then(
        (dataUrl)=>
        {
            let img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        }
    ).catch((err)=>(
        console.log("Error")
    ))


 }



  return (
    <div>
        <button className="btn bg-danger m-4" onClick={saveImg}>Save</button>
      <div id="jpg" className="container mt-auto">
        <h1 className="text-bg-success">
            Bangladesh
        </h1>
      </div>

    </div>
  );

};

export default App;


// import React from "react";
// import axios from "axios";
//
// import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
//
// function App() {
//   return (
//     <div className="App">
//
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             {/* eslint-disable-next-line react/jsx-no-undef */}
//             <Nav  className="bg-info me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//
//     </div>
//   );
// }
//
// export default App;
