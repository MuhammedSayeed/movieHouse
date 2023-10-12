import React from 'react'
import './HomeLayout.scss'
import * as api from '../../services/api/api.js'
import { getRandomNumber } from '../../utils/utils.jsx'
import { useLoaderData } from 'react-router-dom';
import Gradiant from '../../components/Gradiant/Gradiant.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Row from '../../components/Rows/Row.jsx';

function HomeLayout() {

  const data = useLoaderData();

  return <div
    style={{ backgroundImage: `url('${api.baseUrl_original}${data.backdrop_path}')` }}
    className='home'>
    <div className="home-content">
      <Hero data={data} />
      <Row apiUrl={api.getTrending} title={'Trending'} bigPoster={false} />
      <Row apiUrl={api.topRated} title={'Top rated'} bigPoster={true} />
    </div>
    <Gradiant />
  </div>
}

export default HomeLayout

export const HomeLoader = async () => {
  const response = await fetch(api.getTrending)
  if (!response.ok) {
    throw json({ message: `couldn't fetch data` }, { status: 500 })
  }
  else {
    const resData = await response.json();
    return resData.results[getRandomNumber(19)]
  }
}