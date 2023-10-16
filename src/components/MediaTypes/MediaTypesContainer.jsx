import { BiMoviePlay } from 'react-icons/bi';
import { MdMonitor } from 'react-icons/md';


const mediaTypes = [
    {
        name: 'Movie',
        icon: <BiMoviePlay />,
        type: "movie",
        id : 1
    },
    {
        name: 'Tv show',
        icon: <MdMonitor />,
        type: "tv",
        id : 2

    },

]

export default mediaTypes