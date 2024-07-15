import { useState } from "react";

type Patient = {
  name: string;
  email: string;
  physio: string;
};

type Props = {
  patients: Patient[];
};

export const Table = ({ patients }: Props) => {
  const [hidden, setHidden] = useState(true);

  const handleHidden = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setHidden(!hidden);
  };
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Patient name</th>
          <th scope="col">Email</th>
          <th scope="col">Physio</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td>
              <a href="#" onClick={handleHidden}>
                {patient.name}
              </a>
            </td>
            {!hidden && (
              <button
                hidden={hidden}
                // onClick={handleClick}
              >
                Delete
              </button>
            )}
            <td>{patient.email}</td>
            <td>{patient.physio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
