import React, { useState } from "react";
import Span from "./Span";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({});

  const handleChangeInput = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    });
  };

  const handleChangeSelect = (e) => {
    setForm({
      ...form,
      role: e.target.value,
    });
  };

  const renderSpan = () => {
    if (form.name && !form.role) {
      return <Span value={"Nombre: " + form.name + " | Rol: "} />;
    }
    if (form.role && !form.name) {
      return <Span value={"Nombre:  | Rol: " + form.role} />;
    }
    if (form.role && form.name) {
      return <Span value={"Nombre: " + form.name + " | Rol: " + form.role} />;
    }
  };

  return (
    <form action="" id="form-nombre-role" onSubmit={(e) => e.preventDefault()}>
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
