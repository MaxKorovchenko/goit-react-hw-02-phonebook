import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contactsList }) => {
  return (
    <>
      <ul>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};
