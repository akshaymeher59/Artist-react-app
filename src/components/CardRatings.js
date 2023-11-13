import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import avengersImg from "./marvels-avengers.jpg"


export default function CardRatings({albumName, artist}) {
    return (
        <Card sx={{
            maxWidth: 300,
            minWidth: 200,
            minHeight: 200,
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
                    sx={{ height: 230 }}
                    component="img"
                    height="140"
                    image={avengersImg}
                    alt="green iguana"
                />
                <CardContent>
                   
                    <Typography>
                        {artist}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}