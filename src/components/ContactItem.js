import React from "react";
import { Row, Cell } from "./ContactList.styled";

const ContactItem = ({
  contact = { firstName: "", lastName: "", phoneNumber: "" },
}) => (
  <Row>
    <Cell>{contact.firstName}</Cell>
    <Cell>{contact.lastName}</Cell>
    <Cell>{contact.phoneNumber}</Cell>
  </Row>
);

export default ContactItem;
