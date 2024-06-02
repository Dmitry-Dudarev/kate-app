import React from "react";
import "./Contacts.css";
import Contact from "../Contact/Contact";
import { Wherego } from "../constants/Wherego";
import ContactInfo from "../ContactInfo/ContactInfo";

function Contacts(props) {
  const contactsData = props.contactsData;
  const photoUrl = `${Wherego.devUrl}/images/contacts/${contactsData[0].photo}`;

  console.log(photoUrl)

  return (
    <section className="contacts">
      <h2 className="app-text contacts__title">Contacts</h2>
      <div className="contacts__container">
        <img className="contacts__image" src={photoUrl} alt="contacts" />
        <div className="contacts__mobile">
          {contactsData.map((item, index) => {
            return (
              <Contact key={index} item={item} index={index} />
            )
          })}
        </div>

        <div className="contacts__regular">
          <ContactInfo position="contacts" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;