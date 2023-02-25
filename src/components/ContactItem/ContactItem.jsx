export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </p>
    </>
  );
};
