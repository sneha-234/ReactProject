import React from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import * as yup from "yup";
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import HeadPage from "../Layout/headPage";
import HEAD_TITLE from "@/utils/titleConstant";
import styles from "./style.module.css";
import { CheckboxField , InputField } from "../fields";
import { SignUpService } from "@/services/authservices";
import { useRouter } from "next/router";
import {FaArrowLeft , FaArrowRight} from "react-icons/fa";



const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  termsAndCondition: false,
};

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  termsAndCondition: yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});



 
function Signup() {



  const router = useRouter();

  const handleFormSubmit = async (values) => {
    console.log ("values" , values)
    const res = await SignUpService({
      password: values.password,
      email: values.email,
      confirmPassword: values.confirmPassword,
      termsAndCondition: values.termsAndCondition
    });

    if (res.success) {
      router.replace("./home");
    } else {
      alert(res.message);
    }
   
  };

  return (
    <HeadPage title={HEAD_TITLE.signup}>
      <Container className="my-3 pt-5">
        <Row className="justify-content-center mt-3">
          <Col lg={5} md={7} xs={12}>
            <Formik
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
              initialValues={defaultValues}
            >
              {({ handleSubmit, isSubmitting }) => (
                <FormikForm noValidate onSubmit={handleSubmit}>
                  <div
                    className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                  >
                    <Row className="my-2">
                      <Col>
                        <h2 className={`${styles.contactFormHeading} text-center`}>
                          SignUp Page
                        </h2>
                        <p className={`${styles.contactFormParagh} text-center text-dark`}>
                          Faucibus ultrices facilisis odio amet, luctus vehicula, turpis elit.
                          Sed placerat.
                        </p>
                      </Col>
                      <Col xs={12} className="my-2">
                        <Field
                          name="email"
                          placeholder="Email Address"
                          label="Email"
                          component={InputField}
                        />
                      </Col>
                      <Col xs={12} className="my-2">
                        <Field
                          type="password"
                          name="password"
                          label="Password"
                          placeholder="Enter your password"
                          component={InputField}
                        />
                      </Col>
                      <Col xs={12} className="my-2">
                        <Field
                          type="password"
                          name="confirmPassword"
                          label="Confirm Password"
                          placeholder="Confirm your password"
                          component={InputField}
                        />
                      </Col>
                      <Col xs={12} className="my-2">
                        <Field
                          name="termsAndCondition"
                          label="I accept the terms and conditions"
                          component={CheckboxField}
                        />
                      </Col>

                      <div className="col-12 mx-auto my-2 mt-4">
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          className={`btn w-100 ${
                            isSubmitting ? "bg-secondary" : "bg-primary"
                          } bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}
                        >
                          {isSubmitting ? (
                            <Spinner animation="border" role="status">
                              <span className="visually-hidden">Signing Up</span>
                            </Spinner>
                          ) : (
                            "SignUp"
                          )}
                        </Button>
                        <div className="col-12 mt-4 d-flex justify-content-between">
                              <a href="./home">
                                <FaArrowLeft/> back
                              </a>
                              <a href="./login">
                                {" "}
                                Login <FaArrowRight/>
                              </a>
                            </div>
                      </div>
                    </Row>
                  </div>
                </FormikForm>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </HeadPage>
  );
}

export default Signup;

