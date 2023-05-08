import React from 'react';
import AppNavBar from "../Components/Common/AppNavBar";
import UpdateForm from "../Components/Update/UpdateForm";
import {useParams} from "react-router";
const UpdatePage = () => {
    const params = useParams();

    return (
        <div>
            <AppNavBar/>
            <UpdateForm id = {params["id"]}/>
        </div>
    );
};

export default UpdatePage;