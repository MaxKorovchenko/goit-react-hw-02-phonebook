import { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, MainTitle, Title } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
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
        <MainTitle>Phonebook</MainTitle>
        <ContactsForm onSave={this.addContact} />

        <Title>Contacts</Title>
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
