export const Filter = ({ onFilter, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={onFilter}
          name="nameToFind"
          onChange={onChange}
          autoComplete="off"
        />
      </label>
    </div>
  );
};
