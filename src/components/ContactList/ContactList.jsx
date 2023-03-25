import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/contact/selectors.js';
import { deleteContact } from 'redux/contact/operations';

import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const filteredContacts = useSelector(selectFilteredContacts);

    return (
            <ul className={styles.list}>
                {contacts.items.length ? filteredContacts.map((contact) => (
                    <li className={styles.text} key={contact.id}>
                        {contact.name} {contact.number}
                        <button
                            className={styles.button}
                            onClick={() => dispatch(deleteContact(contact.id))}>
                            Delete
                        </button>
                    </li>
                ))
                    : 'No contacts'}
            </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func,
};