import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ValidationOne() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      age: "",
      mobilenumber: "",
      Gender: ""
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string()
        .min(2, "Too short")
        .max(100, "Too long")
        .required("Full name is required")
        .matches(/^[a-zA-Z ]+$/, "Only alphabet is allowed"),
      age: Yup.string()
        .matches(/^[0-9][0-9]$/, "only digits are allowed")
        .required("Age is required"),
      gender: Yup.string().required("gender is required"),
      mobilenumber: Yup.string()
        .matches(/^[6-9][0-9]{9}$/, "Only 10 digits are allowed")
        .required("mobile number is required")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <div>
      <h2> Simple Validation </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label> Full Name </label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />{" "}
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="alert alert-danger"> {formik.errors.fullname} </div>
          ) : null}
        </div>
        <div className="form-group">
          <label> Age </label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="alert alert-danger"> {formik.errors.age} </div>
          ) : null}
        </div>
        <div class="form-group">
          <label>Gender</label>
          <input type="radio" value="male" name="gen" /> male
          <input type="radio" value="female" name="gen" />
          female
          <input type="radio" value="other" name="gen" />
          others
        </div>
        <div className="form-group">
          <label> mobilenumber </label>
          <input
            type="text"
            name="mobilenumber"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
            <div className="alert alert-danger">
              {formik.errors.mobilenumber}
            </div>
          ) : null}
        </div>
        <input type="submit" value="submit" className="btn btn-success" />
      </form>
    </div>
  );
}
