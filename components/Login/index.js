import React, { useState } from "react";
import HeadPage from "../Layout/headPage";
import HEAD_TITLES from "@/utils/titleConstant";
import styles from "./style.module.css";
import { Alert, Button, Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import axios from "axios";
import { FaLock, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import * as yup from "yup";
import InputField from "../fields";
import AlertMessage from "./Alert"

const defaultValues = {
  email: "",
  password: "",
};

function Login() {
  const [alert, setAlert] = useState(null);

  const handleFormSubmit = (values) => {
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("userAuthToken", response.data.token);
        window.location = "/home";
      })
      .catch(function (error) {
        if (error?.response?.status === 400) {
          setAlert({
            variant: "danger",
            message: error.response?.data?.error,
          });
        } else {
          setAlert({
            variant: "danger",
            message: error.message,
          });
        }
      });
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
  });

  return (
    <>
      <HeadPage title={HEAD_TITLES.login}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                <Formik
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                  initialValues={defaultValues}
                >
                  {({ handleSubmit, isSubmitting }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit}>
                        <div
                          className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                        >
                          <div className="row my-2">
                            <div className="col-12">
                              <h2
                                className={`${styles.contactFormHeading} text-center`}
                              >
                                Get In Touch
                              </h2>
                              <p
                                className={`${styles.contactFormParagh} text-center text-dark`}
                              >
                                Faucibus ultrices facilisis odio amet, luctus
                                vehicula, turpis elit. Sed placerat.
                              </p>
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                name="email"
                                placeholder="Email Address"
                                label="Email"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                component={InputField}
                              />
                            </div>

                            <div className="col-12 mx-auto my-2 mt-4">
                              <Button
                                type="submit"
                                className="btn w-100 bg-primary bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  "Logging in..."
                                ) : (
                                  <>
                                    <FaLock />
                                    Login &gt;&gt;
                                  </>
                                )}
                              </Button>
                            </div>

                            <div className="col-12 mt-4 d-flex justify-content-between">
                              <a href="./index.html">
                                <FaArrowLeft /> Back
                              </a>
                              <a href="signup.html">
                                {" "}
                                Signup <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>

      {alert && (
        <AlertMessage
          variant={alert.variant}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
}

export default Login;
