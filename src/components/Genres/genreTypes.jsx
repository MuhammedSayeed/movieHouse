import { GiGunshot , GiScarecrow , GiBurningForest } from 'react-icons/gi';
import {  MdTheaterComedy , MdFilterDrama ,  MdOutlineFamilyRestroom} from 'react-icons/md';
import { IoBalloon} from 'react-icons/io5';
const MoviesGenreTypes = [
    {
        name: 'Action',
        id: 28,
        icon : <GiGunshot/>
    },
    {
        name: 'Comedy',
        id: 35,
        icon : <MdTheaterComedy/>
    },
    {
        name: 'Drama',
        id: 18,

        icon : <MdFilterDrama/>
    },
    {
        name: 'Animation',
        id: 16,

        icon : <IoBalloon/>
    },
    {
        name: 'War',
        id: 10752,
        icon : <GiGunshot/>
    },
    {
        name: 'Horror',
        id: 27,
        icon : <GiScarecrow/>
    },
    {
        name: 'Adventure',
        id: 12,
        icon : <GiBurningForest/>
    },
    {
        name: 'Family',
        id: 10751,
        icon : <MdOutlineFamilyRestroom/>
    },
]

const TvGenreTypes = [
    {
        name: 'Action',
        id: 10759,
        icon : <GiGunshot/>
    },
    {
        name: 'Comedy',
        id: 35,
        icon : <MdTheaterComedy/>
    },
    {
        name: 'Drama',
        id: 18,

        icon : <MdFilterDrama/>
    },
    {
        name: 'Animation',
        id: 16,

        icon : <IoBalloon/>
    },
    {
        name: 'War',
        id: 10768,
        icon : <GiGunshot/>
    },
    {
        name: 'Horror',
        id: 9648,
        icon : <GiScarecrow/>
    },
    {
        name: 'Family',
        id: 10751,
        icon : <MdOutlineFamilyRestroom/>
    },
]



export {
    MoviesGenreTypes,
    TvGenreTypes
}