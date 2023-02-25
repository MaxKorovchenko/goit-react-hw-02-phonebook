import { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(({ contacts }) => {
      if (contacts.find(contact => contact.name === newContact.name)) {
        return alert(`${newContact.name} is already in contacts.`);
      }
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm onSave={this.addContact} />

        <h2>Contacts</h2>
        <Filter onFilter={filter} onChange={this.filterContacts} />
        <ContactsList
          contactsList={filteredContacts}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
