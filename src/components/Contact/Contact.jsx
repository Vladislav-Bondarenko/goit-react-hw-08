import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";
import toast from "react-hot-toast";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Delete ${contact.name}?`);
    if (!confirmDelete) return;

    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success("Contact deleted"))
      .catch(() => toast.error("Failed to delete contact"));
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>👤 {contact.name}</p>
        <p>📞 {contact.number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
