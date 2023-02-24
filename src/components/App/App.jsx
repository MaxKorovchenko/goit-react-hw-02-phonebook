import { Component } from 'react';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { Contacts } from 'components/Contacts/Contacts';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Layout>
        <h1>Phonebook</h1>
        <AddContactsForm onSave={this.addContact} />
        <Contacts contactsList={contacts} />
        <GlobalStyle />
      </Layout>
    );
  }
}
