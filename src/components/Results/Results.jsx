import React, { useEffect, useState } from 'react'
import './Results.scss'
import { getRecommenditons } from '../../services/api/api.js'
import { getRandomNumber } from '../../utils/utils.jsx'
import { useLoaderData } from 'react-router-dom'
import List from '../List/List.jsx'
function Results() {

    const { results } = useLoaderData();
    const dataSet = new Set();
    const [shows, setShows] = useState([]);


    const getRecommenditions = async () => {
        const shows = [];
        while (shows.length < 3) {
            const randomIndex = getRandomNumber(results.length);
            const randomShow = results[randomIndex];

            if (randomShow.vote_average > 7 && !dataSet.has(randomShow.id)) {
                shows.push(randomShow);
                dataSet.add(randomShow.id);
            }
        }
        setShows(shows);
    }

    useEffect(() => {


        getRecommenditions();
    }, [])
    return <div className="results-container">
        <List data={shows} />

    </div>
}

export default Results
export const resultsLoader = async ({ params }) => {

    const response = await fetch(getRecommenditons(params.media, params.genre, getRandomNumber(19)));
    if (!response.ok) {
        throw json({ Message: `couldn't fetch details` }, {
            status: 500
        })
    }
    else {
        const resData = await response.json();
        return resData;
    }
}