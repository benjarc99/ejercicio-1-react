import React, { useState } from "react";
import Span from "./Span";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({});
  const [show, setShow] = useState({
    name: false,
    role: false,
  });

  const handleChangeInput = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    });
    setShow({
      ...show,
      name: true,
    });
  };

  const handleChangeSelect = (e) => {
    setForm({
      ...form,
      role: e.target.value,
    });
    setShow({
      ...show,
      role: true,
    });
  };

  const renderSpan = () => {
    if (show.name || show.role) {
      return <Span value={"Nombre: " + form.name + " | Rol: " + form.role} />;
    }
  };

  return (
    <form action="" id="form-nombre-role">
      <label htmlFor="input-form"> Nombre: </label>
      <input
        type="text"
        id="input-form"
        name="name"
        onChange={handleChangeInput}
      />
      <label htmlFor="select-form"> Role: </label>
      <select
        id="select-form"
        name="role"
        defaultValue=""
        onChange={handleChangeSelect}
      >
        <option value="">-- Seleccione un rol --</option>
        <option value="designer">Designer</option>
        <option value="developer">Developer</option>
        <option value="dev-op">Dev Op</option>
      </select>
      {renderSpan()}
    </form>
  );
};

export default Form;
