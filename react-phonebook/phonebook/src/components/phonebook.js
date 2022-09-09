import React, { useState } from "react";


const ContactForm = (props) => {
    const initialFormValue = {
        id: null,
        contactFirstname: "",
        contactLastname: "",
        phoneNumber: ""
    };

    const [contact, setContact] = useState(initialFormValue);

    const handleOnChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!contact.contactFirstname || !contact.contactLastname || !contact.phoneNumber) return;
        props.addContact(contact);
        setContact(initialFormValue)
    };


    return(
        <form onSubmit={handleOnSubmit}>
            <label>Firstname:</label>
            <br />
            <input className="contactFirstname" name="contactFirstname" type="text" value={contact.contactFirstname} onChange={handleOnChange} />
            <br />
            <label>Lastname:</label>
            <br />
            <input className="contactLastname" name="contactLastname" type="text" value={contact.contactLastname} onChange={handleOnChange} />
            <br />
            <label>Phone Number:</label>
            <br />
            <input />
            <br />
            <input />
        </form>
    )
};




