import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/ADD");

const deleteContact = createAction("contact/Delete");

const filter = createAction("contact/filter");

export default { addContact, deleteContact, filter };
