import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contact-actions";
import s from "./ContactList.module.css";

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((items) =>
    items.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactsList = () => {
  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );
  if (contacts.length === []) return null;
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem name={name} phone={phone} id={id} key={id} />
      ))}
    </ul>
  );
};

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}:{phone}
      <button onClick={() => dispatch(actions.deleteContact(id))}>
        delete
      </button>
    </li>
  );
};

export default ContactsList;
