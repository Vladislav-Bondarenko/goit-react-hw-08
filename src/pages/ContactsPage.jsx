import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
