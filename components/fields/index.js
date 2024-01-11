import React from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

 export function InputField({ field, form, label, ...props }) {
  const fieldName = field.name;

  const isTouched = form.touched[fieldName];
  const error = form.errors[fieldName];

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        className={`form-control ${styles.inputFormControl} shadow-none`}
        isInvalid={isTouched && !!error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </>
  );
}

 export const CheckboxField = ({ field, form, label, ...props }) => (
  <Form.Group controlId={field.name}>
    <Form.Check
      type="checkbox"
      label={label}
      checked={field.value}
      onChange={() => form.setFieldValue(field.name, !field.value)}
      isInvalid={form.errors[field.name] && form.touched[field.name]}
    />
    <Form.Control.Feedback type="invalid">
      {form.errors[field.name]}
    </Form.Control.Feedback>
  </Form.Group>
);
