import React, { useState } from "react";



const ContactForm = (props) => {
    const initialFormValue = {
        id: null,
        contactFirstname: " ",
        contactLastname: " ",
        phoneNumber: " "
    };

    const [contactState, setContactState] = useState(initialFormValue);

    const handleOnChange = (e) => {
        setContactState({
            ...contactState,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!contactState.contactFirstname || !contactState.contactLastname || !contactState.phoneNumber) return;
        props.addContact(contactState);
        setContactState(initialFormValue)
    };


    return(
        <form onSubmit={handleOnSubmit}>
            <label>Firstname:</label>
            <br />
            <input className="contactFirstname" name="contactFirstname" type="text" value={contactState.contactFirstname} onChange={handleOnChange} />
            <br />
            <label>Lastname:</label>
            <br />
            <input className="contactLastname" name="contactLastname" type="text" value={contactState.contactLastname} onChange={handleOnChange} />
            <br />
            <label>Phone Number:</label>
            <br />
            <input className="phoneNumber" name="phoneNumber" type="text" value={contactState.phoneNumber} onChange={handleOnChange}/>
            <br />
            <input className="submitButton" type="submit" value="Add Contact"/>
        </form>
    )
};

const ContactTable = (props) => {
    const sortedContacts = props.newContacts.sort((a, b) =>
     a.contactFirstname.localeCompare(b.contactFirstname));

    const displayContacts = sortedContacts.length > 0 ? (
        sortedContacts.map((contact, index) => (
            <tr key={index}>
                <td>{contact.contactFirstname}</td>
                <td>{contact.contactLastname}</td>
                <td>{contact.phoneNumber}</td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={3}>&nbsp;</td>
        </tr>
    );
    return (
        <table>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>{displayContacts}</tbody>
        </table>
    );
}

const PhoneBook = (props) => {
    const contactObj = [];

    const [newContacts, setNewContacts] = useState(contactObj);

    const addContact = (contacts) => {
     contacts.id = newContacts.length + 1;
     setNewContacts([...newContacts, contacts])
    };

    return (
        <section>
            <ContactForm addContact={addContact} />
            <ContactTable newContacts={newContacts} />
        </section>
    )

}


export default PhoneBook;
