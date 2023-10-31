import PeopleIcon from '@mui/icons-material/People';
import AlbumIcon from '@mui/icons-material/Album';
import StarsIcon from '@mui/icons-material/Stars';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PortraitIcon from '@mui/icons-material/Portrait';


export const mainNavbarItems =  [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Users',
        route: 'user',
    },
    {
        id: 1,
        icon: <PortraitIcon />,
        label: 'Artist',
        route: 'artist',
    },
    {
        id: 2,
        icon: <AlbumIcon />,
        label: 'Albums',
        route: 'album',
    },
    {
        id: 3,
        icon: <StarsIcon />,
        label: 'Users Rating',
        route: 'usersRating',
    },
    {
        id: 4,
        icon: <StarHalfIcon />,
        label: 'Albums Rating',
        route: 'albumRating',
    },
]
