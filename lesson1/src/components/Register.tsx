import { useFormik, FormikProps } from "formik";
import { FormEvent, FunctionComponent } from "react";
import * as Yup from "yup";

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: FunctionComponent = () => {
  const formik: FormikProps<RegisterFormValues> = useFormik<RegisterFormValues>(
    {
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), undefined], "Passwords must match")
          .required("Required"),
      }),
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    }
  );

  return (
    <>
    <div className="container w-100 border border-2 border-success p-4 my-5">
      <h2 className="display-2 my-5 text-center text-success">Register</h2>
      <form className="text-center" onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            autoComplete="on"
            type="email"
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            id="email"
            placeholder="name@example.com"
            name="email"
          />
          <label htmlFor="email">Email address</label>
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className={`form-control ${
              formik.touched.password && formik.errors.password
                ? "is-invalid"
                : ""
            }`}
            id="password"
            placeholder="Password"
            name="password"
          />
          <label htmlFor="password">Password</label>
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className={`form-control ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "is-invalid"
                : ""
            }`}
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="invalid-feedback">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
          className="btn btn-primary">
          Register
        </button>
        </form>
      </div>
    </>
  );
};

export default Register;
