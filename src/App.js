import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MemberForm from "./Form";
import Member from "./Member";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

const currentMembers = [
  {
    name: "Kenny Tran",
    email: "kenny@kenny.com",
    role: "Frontend Engineer",
  },
  {
    name: "Sammy Tran",
    email: "sammy@sammy.com",
    role: "Backend Engineer",
  },
  {
    name: "Heidi Tran",
    email: "heidi@heidi.com",
    role: "Manager",
  },
];

function App() {
  const [members, setMembers] = useState(currentMembers);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newMember.name || !newMember.email || !newMember.role) return;

    setMembers([...members, newMember]);

    setFormValues(initialFormValues);
  };

  return (
    <div className="container">
      <h1>Form App</h1>

      <MemberForm values={formValues} update={updateForm} submit={submitForm} />

      {members.map((member) => {
        return <Member member={member} />;
      })}
    </div>
  );
}

export default App;
