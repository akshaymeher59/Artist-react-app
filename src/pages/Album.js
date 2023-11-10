import React from 'react'
import SelectUser from '../components/SelectUser'
import { TextField, Button, Stack, Card, CardContent, Container } from '@mui/material'
import MuiTable from '../components/Navbar/MuiTable'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/users/usersSlice';

function Album() {

  const [userName, setUserName] = React.useState('');

  const dispatch = useDispatch();

  function addUserHandler() {
    dispatch(addUser(userName));
    setUserName('');
  }

  const users = useSelector(store => store.user);
  const artist = useSelector(store => store.artist);


  return (
    <>
      <SelectUser users={users} />
      <Container style={{ marginLeft: '320px' }}>
        <Card style={{ marginLeft: '50px', marginTop: '50px' }} color='primary'>
          <CardContent>
            <form noValidate>
              <Stack spacing={2} width={700}>
                <h1>Album's Details</h1>
                <TextField label={'Album Id'} disabled value={users.length + 1} />
                <SelectUser users={artist} />
                <TextField label={''}
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <Button variant='contained' color='primary' onClick={addUserHandler}>Add </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
        <MuiTable users={users} type="user" />
      </Container>
    </>
  )
}

export default Album