import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <h1>Phone Book App</h1>
      <hr />
      <ContactForm onSubmit={handleSubmit} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
