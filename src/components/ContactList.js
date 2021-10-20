import React from "react";
import ContactItem from "./ContactItem";
import * as Styled from "./ContactList.styled";

const ContactList = ({ contacts = [] }) => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.HeaderCell>First Name</Styled.HeaderCell>
        <Styled.HeaderCell>Last Name</Styled.HeaderCell>
        <Styled.HeaderCell>Phone #</Styled.HeaderCell>
      </Styled.Row>
      {contacts.map((contact, idx) => (
        <ContactItem key={`contact-${idx}`} contact={contact} />
      ))}
      {contacts.length === 0 && <p>No contacts...</p>}
    </Styled.Container>
  );
};

export default ContactList;
