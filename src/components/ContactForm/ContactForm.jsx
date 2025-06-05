import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success("Contact added successfully!"))
      .catch(() => toast.error("Failed to add contact"));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
