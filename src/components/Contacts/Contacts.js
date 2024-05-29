import React from "react";
import "./Contacts.css";
import Contact from "../Contact/Contact";

function Contacts(props) {
  const contactsData = props.contactsData;

  return (
    <section className="contacts">
    <h2 className="app-text contacts__title">Contacts</h2>
      {contactsData.map((item, index) => {
        return (
          <Contact key={index} item={item} index={index} />
        )
      })}
    </section>
  );
};

export default Contacts;