import React from 'react'
import SelectType from '../components/SelectType'
import { useSelector } from 'react-redux';
import MediaCard from '../components/MediaCard';
import { Stack } from '@mui/material';

function AlbumsRating() {
  // const [userName, setUserName] = React.useState('');
  const [selectedUserInAlbum, setSelectedUserInAlbum] = React.useState('');


  const users = useSelector(store => store.user);
  const albums = useSelector(store => store.album);

  const selecctedAlbumsOfUser = albums.filter((item) => item.user === selectedUserInAlbum);

  console.log("Selected Albums of User", selecctedAlbumsOfUser);


  return (
    <div>

      <div style={{width: 1000, height: 50, marginLeft:340}}>
        <SelectType
          users={users} type='user'
          selectedUser={selectedUserInAlbum}
          setSelectedUser={setSelectedUserInAlbum}
        />
      </div>

      <div style={{marginLeft:340, display: 'flex', flexWrap: "wrap"}}>

        {
          selecctedAlbumsOfUser.map((album) => {
            return <>
              <MediaCard
                key={album.id}
                userID={album.id}
                albumName={album.userName}
                artist={album.artist}
                rating={album.rating}
              />
            </>
          })
        }
      </div>
    </div>
  )
}

export default AlbumsRating