import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import Completed from "../components/Completed/Completed";

const CompletedPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Completed/>
            </MasterLayout>
        </Fragment>
    );
};

export default CompletedPage;