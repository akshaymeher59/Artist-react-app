import React from 'react'
import { TextField, Button, Stack, Card, CardContent, Container } from '@mui/material'
import MuiTable from '../components/Navbar/MuiTable'



const Users = () => {
  return (
    <Container style={{ marginLeft: '320px' }}>
      <Card style={{ marginLeft: '50px', marginTop: '50px' }} color='primary'>
        <CardContent>
          <form noValidate>
            <Stack spacing={2} width={700}>
              <h1>User's Details</h1>
              <TextField label={'User Id'}  />
              <TextField label={'User Name'} />
              <Button variant='contained' color='primary'>Add </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
      <MuiTable />
    </Container>
  )
}

export default Users