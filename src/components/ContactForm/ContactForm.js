import React, { useState } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/contact-actions";

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "phone":
        setPhone(value);
        break;

      default:
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const isExistContact = !!contacts.items.find(
      (contacts) => contacts.name === name
    );
    isExistContact && alert("Контакт уже существует!");

    return (
      !isExistContact &&
      dispatch(actions.addContact({ id: shortid(), name, phone })) &&
      resetForm()
    );
  };
  const resetForm = () => {
    setName("");
    setPhone("");
  };
  return (
    <form onSubmit={handleFormSubmit} className={s.ContactForm}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder="Введите имя"
        value={name}
        onChange={handleChange}
        className={s.FormInput}
      />
      <input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        placeholder="Введите номер телефона"
        value={phone}
        onChange={handleChange}
        className={s.FormInput}
      />
      <button type="submit" className={s.FormButton}>
        Добавить контакт
      </button>
    </form>
  );
}
