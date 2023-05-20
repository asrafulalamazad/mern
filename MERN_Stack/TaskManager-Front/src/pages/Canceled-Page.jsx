import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Cancel} from "axios";
import Canceled from "../components/Canceled/Canceled";

const CanceledPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Canceled/>
            </MasterLayout>
        </Fragment>
    );
};

export default CanceledPage;