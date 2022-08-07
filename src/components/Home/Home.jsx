import { useSelector, useDispatch } from 'react-redux';
import { getUsers, removeUser, toggleStatus } from 'redux/usersSlice';

const Home = () => {
  const users = useSelector(getUsers);

  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Age</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, avatar, age, isOnline }, index) => {
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{avatar}</td>
                <td>{age}</td>
                <td>
                  <span onClick={() => dispatch(toggleStatus(id))}>
                    {isOnline === 'yes' ? 'online' : 'offline'}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(removeUser(id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
