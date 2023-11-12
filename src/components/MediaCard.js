import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import titanicImg from "./titanic-movie-poster.jpg"
import avengersImg from "./marvels-avengers.jpg"
import Ratings from './Ratings';

export default function MediaCard({albumName, artist, rating, userID}) {
    return (
        <Card sx={{
            maxWidth: 200,
            minWidth: 200,
            backgroundColor: '#101F33',
            color: "rgba(255, 255, 255, 0.7)",
            marginLeft: 2,
            marginTop: 2
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography>
                      {albumName}
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{ height: 130 }}
                    component="img"
                    height="140"
                    image={avengersImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Ratings rating={rating} userID={userID}/>
                    <Typography>
                        {artist}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}