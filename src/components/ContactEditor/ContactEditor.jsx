import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contact/operations'
import { selectContacts } from 'redux/contact/selectors';

import styles from "./ContactEditor.module.css";

export const ContactEditor = () => {
    const contacts = useSelector(selectContacts);
    const nameRef = useRef(null);
    const numberRef = useRef(null);    
    const dispatch = useDispatch();

    const handleAddContact = (e) => {
        e.preventDefault();
        const contactName = nameRef.current.value;
        const contactNumber = numberRef.current.value;
        if (
            contacts.items.find(contact => contact.name === contactName && contact.number === contactNumber)
        ) {
            alert(`${contactName} is already in contacts`);
            return;
        }
   
        dispatch(
            addContact({
                name: contactName,
                number: contactNumber,
            })
        );
        nameRef.current.value = "";
        numberRef.current.value = "";
    };

    return (
        <div lassName={styles.wrapper}>
            <form className={styles.form} onSubmit={handleAddContact}>
                <label>
                    <h2>Name</h2>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        required
                        ref={nameRef}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </label>
                <label>
                    <h2>Number</h2>
                    <input
                        className={styles.input}
                        type="text"
                        name="number"
                        required
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        ref={numberRef}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Add contact
                </button>
            </form>
        </div>
    );
};