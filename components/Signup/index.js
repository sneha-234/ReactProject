import React from "react";
import HeadPage from "../Layout/headPage";
import HEAD_TITLE from "@/utils/titleConstant";
import styles from "./style.module.css";
import { FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa";






function Signup () {
    return (
        <>
        <HeadPage title={HEAD_TITLE.signup}>

<section className="p-0">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-md-7 col-12 mt-4">
                    <form action="">
                        <div className= {`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-1 rounded`}>
                            {/* <img src="./circle-pattern-light.png" alt="" className="img-fluid contact-form-img d-none d-md-block"/> */}
                            <div className="row my-2">
                                <div className="col-12">
                                    <h2 className= {`${styles.contactFormHeading} text-center`}>Get In Touch</h2>
                                    <p className= {` ${ styles.contactFormparagh} text-center`}>faucibus ultrices facilisis odio amet, luctus vehicula, turpis elit. Sed placerat. 
                                    </p>
                                </div>
                                <div className="col-12 my-2">
                                    <input type="text" 
                                    className="form-control shadow-none" 
                                    placeholder="Full name" 
                                    aria-label="Full name"/>
                                </div>
                                <div className="col-12 my-2">
                                    <input type="email" 
                                    className="form-control shadow-none" 
                                    placeholder="Email" 
                                    aria-label="Email"/>
                                </div>
                                <div className="col-12 my-2">
                                    <input type="text" 
                                    className="form-control shadow-none" 
                                    placeholder="Contact with Country Code" 
                                    aria-label="Contact"/>
                                </div>
                                <div className="col-12 my-2">
                                    <input type="password" 
                                    className="form-control shadow-none" 
                                    placeholder="Password" 
                                    aria-label="password"/>
                                </div>
                                <div className="col-12 my-2">
                                    <input type="password" 
                                    className="form-control shadow-none" 
                                    placeholder="confirm Password" 
                                    aria-label="c-password"/>
                                </div>
                  
                                <div className="col-12 mx-auto my-2 mt-4">
                                    <button className="btn w-100 py-3 bg-primary text-white bg-opacity-50" 
                                    type="button"><FaLock/> Signup</button>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-between">
									<a href="./index.html" className="text-primary"><FaArrowLeft/> back</a>
									<a href="./login.html" className="text-primary"> login <FaArrowRight/></a>
								</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </HeadPage>
    </>
    )
}

export default Signup;