import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
