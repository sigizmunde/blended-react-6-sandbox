import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addUser } from 'redux/usersSlice';
import { nanoid } from 'nanoid';
import { getStatus } from 'services/getStatus';

const AddForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setName('');
    setAge('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isOnline = await getStatus();
    const user = { id: nanoid(), avatar: name, name, age, isOnline };
    dispatch(addUser(user));
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Age
        <input
          type="number"
          step="1"
          min="0"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddForm;
