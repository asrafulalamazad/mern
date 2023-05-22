import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {BiCopyright} from "react-icons/bi";
import {CiFacebook, CiLinkedin, CiPhone, CiTwitter} from "react-icons/ci";

const Registration = () => {


    return (
        <Fragment>
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-md-10 col-lg-10 center-screen">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h4>Sign Up</h4>
                                <hr/>
                                <div className="container-fluid m-0 p-0">
                                    <div className="row m-0 p-0">
                                        <div className="col-md-4 p-2">
                                            <label>Email Address</label>
                                            <input   placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>First Name</label>
                                            <input placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Last Name</label>
                                            <input  placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Mobile Number</label>
                                            <input  placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Password</label>
                                            <input  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                        </div>

                                    </div>
                                    <div lassName="row mt-2 p-0">
                                        <div className="col-md-4 p-2">
                                            <button  className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Sign Up</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <span className="d-flex justify-content-between">
                                         <Link className="text-center text-bold ms-3  animated fadeInUp" to="https://www.facebook.com/asrafulalamazaad/"> <BiCopyright/>  ASRAFUL ALAM AZAD </Link>
                                        <span className="h5 text-dark">
                                            <Link className="text-center ms-3  animated fadeInUp" to="https://www.facebook.com/asrafulalamazaad/"><CiFacebook/> </Link>
                                            {/*<span className="ms-1">|</span>*/}
                                            <Link className="text-center ms-3  animated fadeInUp" to="https://www.twitter.com/asraful1988/"><CiTwitter/> </Link>
                                            {/*<span className="ms-1">|</span>*/}
                                            <Link className="text-center ms-3  animated fadeInUp" to="https://www.Linkedin.com/asrafulalamazaad/"><CiLinkedin/> </Link>
                                            <Link className="text-center ms-3  animated fadeInUp" to="/contact"><CiPhone/> </Link>
                                        </span>
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </Fragment>

    );
};

export default Registration;