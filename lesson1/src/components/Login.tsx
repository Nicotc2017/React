import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup
        .string()
        .required()
        .min(9, "Password must be at least 9 characters")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{9,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();

    },
  });
  console.log(formik);
  return (
    <>
      <div className="container w-100 border border-2 border-success p-4 my-5">
        <h4 className="display-4 my-3">Login</h4>
        <form className="mb-4" onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              autoComplete="on"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="email">Email address</label>
            {formik.errors.email && formik.touched.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="on"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <label htmlFor="password">Password</label>
            {formik.errors.password && formik.touched.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button disabled={!formik.isValid || !formik.dirty} type="submit" className="btn btn-success">
            Login
          </button>
        </form>
        <span>
          New User? <Link to="/register">Register</Link>
        </span>
      </div>
    </>
  );
};

export default Login;
