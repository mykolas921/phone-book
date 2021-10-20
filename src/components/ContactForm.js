import React, { useState } from "react";
import * as Styled from "./ContactForm.styled";

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = (fieldName) => (e) =>
    setContact({ ...contact, [fieldName]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contact.firstName || !contact.lastName || !contact.phoneNumber) return;

    onSubmit(contact);
  };
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormGroup>
        <Styled.FormLabel>First Name</Styled.FormLabel>
        <Styled.Input
          onChange={handleChange("firstName")}
          required
          value={contact.firstName}
          placeholder="First Name"
        />
      </Styled.FormGroup>

      <Styled.FormGroup>
        <Styled.FormLabel>Last Name</Styled.FormLabel>
        <Styled.Input
          onChange={handleChange("lastName")}
          required
          value={contact.lastName}
          placeholder="Last Name"
        />
      </Styled.FormGroup>

      <Styled.FormGroup>
        <Styled.FormLabel>Phone #</Styled.FormLabel>
        <Styled.Input
          onChange={handleChange("phoneNumber")}
          required
          value={contact.phoneNumber}
          placeholder="Phone #"
          type="tel"
        />
      </Styled.FormGroup>
      <Styled.Button type="submit">Add</Styled.Button>
    </Styled.Form>
  );
};

export default ContactForm;
