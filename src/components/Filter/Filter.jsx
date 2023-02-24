export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          name="nameToFind"
          onChange={onChange}
          autoComplete="off"
        />
      </label>
    </div>
  );
};
