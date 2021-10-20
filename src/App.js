import React, { useState, useMemo } from "react";
import * as Styled from "./App.styled";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (contact) => {
    setContacts([...contacts, contact]);
  };

  const filteredContacts = useMemo(() => {
    if (!search) return contacts;
    const val = search.toLowerCase();
    const vals = val.split(" ");
    return contacts.filter(
      (c) =>
        vals
          .map(
            (val) =>
              c.firstName.toLowerCase().indexOf(val) > -1 ||
              c.lastName.toLowerCase().indexOf(val) > -1 ||
              c.phoneNumber.toLowerCase().indexOf(val) > -1
          )
          .filter((v) => v).length > 0
    );
  }, [search, contacts]);

  return (
    <Styled.AppContainer>
      <h1>Phone Book App</h1>
      <hr />
      <ContactForm onSubmit={handleSubmit} />
      <Styled.SearchContainer>
        <label>Search</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </Styled.SearchContainer>
      <ContactList contacts={filteredContacts} />
    </Styled.AppContainer>
  );
}

export default App;
