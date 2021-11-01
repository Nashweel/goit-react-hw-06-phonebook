import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contact-actions";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={(e) => dispatch(actions.filter(e.currentTarget.value))}
      placeholder="Введите имя для поиска"
    ></input>
  );
};

export default Filter;
