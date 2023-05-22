import React, {Fragment, useRef} from 'react';
import {Link} from "react-router-dom";
import {BiCopyright} from "react-icons/bi";
import {CiFacebook, CiLinkedin, CiPhone, CiTwitter, CiYoutube} from "react-icons/ci";

const Login = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br/>
                                <input placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr/>
                                <div className="float-end mt-3">

                                    <span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                    </span>
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
export default Login;