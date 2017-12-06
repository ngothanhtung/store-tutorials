import React from 'react';

export default function ContactList({ contacts }) {
  const list = () => contacts.map(contact => (
    <li key={contact.id}>{contact.name.first} {contact.name.last}</li>
  ));

  return (
    <div>
      <ul>
        {list()}
      </ul>
    </div>
  );
}
