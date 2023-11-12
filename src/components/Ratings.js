import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addRating } from '../features/albums/albumSlice';

export default function Ratings({rating , userID}) {

  const [value, setValue] = React.useState(rating);
  const dispatch = useDispatch();


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        "& .MuiRating-iconFilled": {
          color: "yellow"
        },
        "& .MuiRating-iconEmpty": {
          color: "#ffff"
        },
      }}
    >
     
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          dispatch(addRating( userID, newValue));
        }}
      />
    </Box>
  );
}