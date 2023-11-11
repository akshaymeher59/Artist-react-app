import React from 'react'
import SelectType from '../components/SelectType'
import { TextField, Button, Stack, Card, CardContent, Container } from '@mui/material'
import MuiTable from '../components/Navbar/MuiTable'
import { useDispatch, useSelector } from 'react-redux';
import { addAlbums } from '../features/albums/albumSlice';

function Album() {

  const [userName, setUserName] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState('');
  const [selectedArtist, setSelectedArtist] = React.useState('');

  const dispatch = useDispatch();

  const users = useSelector(store => store.user);
  const artist = useSelector(store => store.artist);
  const album = useSelector(store => store.album);
  // console.log('album', album);



  function addUserHandler() {

    if (userName !== '' && selectedUser !== '' && selectedArtist !== '') {
      dispatch(addAlbums(userName, selectedUser, selectedArtist));
      setUserName('');
      console.log('album', album);
    }

  }



  return (
    <>
      <SelectType
        users={users} type='user'
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />

      <Container style={{ marginLeft: '320px' }}>

        <Card style={{ marginLeft: '50px', marginTop: '50px' }} color='primary'>

          <CardContent>

            <form noValidate>

              <Stack spacing={2} width={700}>

                <h1>Album's Details</h1>

                <TextField
                  label={'Album Id'}
                  disabled 
                  value={album.length + 1}
                />

                <SelectType
                  users={artist} type='artist'
                  // selectedUser={selectedUser}
                  // setSelectedUser={setSelectedUser}
                  setSelectedArtist={setSelectedArtist}
                />

                <TextField
                  label={'Album Name'}
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                
                <Button
                  variant='contained'
                  color='primary'
                  onClick={addUserHandler}
                >Add </Button>

              </Stack>

            </form>

          </CardContent>

        </Card>

        <MuiTable users={album} type="album" />

      </Container>
    </>
  )
}

export default Album