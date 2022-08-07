import { useSelector, useDispatch } from 'react-redux';
import { getUsers, removeUser, toggleStatus } from 'redux/usersSlice';
import Avatar from 'react-avatar';
import { Table, Thead, Button, Status } from './Home.styled';

const Home = () => {
  const users = useSelector(getUsers);

  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <Thead>
          <tr>
            <th>No</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </Thead>
        <tbody>
          {users.map(({ id, name, avatar, age, isOnline }, index) => {
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar name={avatar} size={42} round={true} />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <Status onClick={() => dispatch(toggleStatus(id))}>
                    {isOnline === 'yes' ? 'online' : 'offline'}
                  </Status>
                </td>
                <td>
                  <Button
                    type="button"
                    onClick={() => dispatch(removeUser(id))}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
