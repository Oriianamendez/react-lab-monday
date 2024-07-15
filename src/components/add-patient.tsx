import React, { ChangeEvent, useState } from "react";
import { Table } from "./table";

type Patient = {
  name: string;
  email: string;
  physio: string;
};

export const AddPatient = () => {
  const [name, setName] = useState("");
  const [physio, setPhysio] = useState("");
  const [email, setEmail] = useState("");
  const [listPatient, setListPatient] = useState<Patient[]>([]);

  const handleSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    const newPatient = { name, email, physio };
    setListPatient([...listPatient, newPatient]);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setPhysio(e.target.value)}>
          <option value="">Physio</option>
          <option value="Oriana Mendez">Oriana Mendez</option>
          <option value="Gabriela Pacheco">Gabriela Pacheco</option>
          <option value="Aixa Prato">Aixa Prato</option>
        </select>
        <button type="submit">Add patient</button>
      </form>
      <Table patients={listPatient} />
    </>
  );
};
