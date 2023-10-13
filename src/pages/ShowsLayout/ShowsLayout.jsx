import React, { useState } from 'react'
import './ShowsLayout.scss'
import * as api from '../../services/api/api.js'
import { json, useLoaderData } from 'react-router-dom'
import List from '../../components/List/List.jsx';
function ShowsLayout() {

  const [data, setData] = useState(useLoaderData());

  console.log(data);


  return <div className='shows'>
    <div className="listContainer">
      <List data={data} />
    </div>
    <div className="loadMore">
      <button className='loadMore-btn'>Load More</button>
    </div>
  </div>
}

export default ShowsLayout

export const showsLoader = async ({ params }) => {
  const response = await fetch(api.discover(params.type, params.genre, params.page))
  if (!response.ok) {
    throw json({ Message: `couldn't fetch details` }, {
      status: 500
    })
  }
  else {
    const resData = await response.json();
    return resData?.results;
  }
}