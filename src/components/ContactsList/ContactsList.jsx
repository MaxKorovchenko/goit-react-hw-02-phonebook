import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <>
      <ul>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
