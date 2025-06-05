import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Email
          <Field type="email" name="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          Password
          <Field type="password" name="password" className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
