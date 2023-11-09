import React, { useState } from 'react'
import { TextField, Button, Stack, Card, CardContent, Container } from '@mui/material'
import MuiTable from '../components/Navbar/MuiTable'



const Users = () => {


  const [userName, setUserName] = useState('');


  function addUserHandler() {
    async function addUser() {
      const res = await fetch('http://localhost:8080/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userName: userName})
      });
      const data = await res.json();
      console.log("data", data);
      // setUser(data);
    }
    addUser();
  }

  return (
    <Container style={{ marginLeft: '320px' }}>
      <Card style={{ marginLeft: '50px', marginTop: '50px' }} color='primary'>
        <CardContent>
          <form noValidate>
            <Stack spacing={2} width={700}>
              <h1>User's Details</h1>
              <TextField label={'User Id'} disabled value={1} />
              <TextField label={'User Name'} onChange={(e) => setUserName(e.target.value)} />
              <Button variant='contained' color='primary' onClick={addUserHandler}>Add </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
      <MuiTable />
    </Container>
  )
}

export default Users