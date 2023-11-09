import React from 'react'
import { TextField, Button, Stack, Card, CardContent, Container } from '@mui/material'
import MuiTable from '../components/Navbar/MuiTable'



const Artist = ({user}) => {
  return (
    <Container style={{ marginLeft: '320px' }}>
      <Card style={{ marginLeft: '50px', marginTop: '50px' }} color='primary'>
        <CardContent>
          <form noValidate>
            <Stack spacing={2} width={700}>
              <h1>Artist's Details</h1>
              <TextField label={'Artist Id'}  />
              <TextField label={'Artist Name'} />              
              <Button variant='contained' color='primary'>Add </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
      <MuiTable  user={user}/>
    </Container>
  )
}

export default Artist