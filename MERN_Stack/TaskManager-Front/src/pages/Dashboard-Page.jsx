import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
    return (
        <Fragment>
                <MasterLayout>
                    <Dashboard/>
                </MasterLayout>

        </Fragment>
    );
};

export default DashboardPage;