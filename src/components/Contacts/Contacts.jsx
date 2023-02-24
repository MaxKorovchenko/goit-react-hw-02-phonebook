export const Contacts = ({ contactsList }) => {
  return (
    <div>
      <h2>Contacts</h2>
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
