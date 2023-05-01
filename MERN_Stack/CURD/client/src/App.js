import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import ReadPage from "./Pages/ReadPage";
import CreatePage from "./Pages/CreatePage";
import UpdatePage from "./Pages/UpdatePage";

const App = () => {
    return (
        <div>
            {/*<ReadPage></ReadPage>*/}
         <Fragment>
            <BrowserRouter>
                <Routes>
                     <Route exact path="/" Component={ReadPage}/>
                     <Route exact path="/create" Component={CreatePage}/>
                     <Route exact path="/update" Component={UpdatePage}/>
                </Routes>
            </BrowserRouter>
         </Fragment>
        </div>


        // <Fragment>
        //     <BrowserRouter>
        //
        //             <Route exact path="/" component={ReadPage}/>
        //             <Route exact path="/create" component={CreatePage}/>
        //             <Route exact path="/update" component={UpdatePage}/>
        //
        //     </BrowserRouter>
        // </Fragment>
    );
};

export default App;