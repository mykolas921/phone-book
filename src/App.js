import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";

function App() {
  const [contactList, setContactList] = useState([]);

  const handleSubmit = (contact) => {
    setContactList([...contactList, contact]);
  };

  return (
    <div className="App">
      <h1>Phone Book App</h1>
      <hr />
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
