import { Filter } from 'components/Filter/Filter';

export const Contacts = ({ contactsList, filter, onChange }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onChange} />
      <ul>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
