import React, { useState } from 'react'
import './ShowsLayout.scss'
import * as api from '../../services/api/api.js'
import { json, useLoaderData, useParams } from 'react-router-dom'
import List from '../../components/List/List.jsx';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner.jsx';
function ShowsLayout() {

  const [data, setData] = useState(useLoaderData());
  const params = useParams()
  const { type, genre } = params;
  const [currentPage, setCurrentPage] = useState(parseInt(params.page))
  const [loading, setLoading] = useState(false);




  const loadMoreData = async () => {
    setLoading(true);
    try {
      await axios.get(api.discover(type, genre, currentPage + 1)).then((response) => {
        setData([...data, ...response.data.results])
        setLoading(false);
        setCurrentPage(currentPage + 1)
      })
    } catch (error) {
      console.log(error);
    }

  }
  return <div className='shows'>
    <div className="listContainer">
      <List data={data} />
    </div>
    <div className="loadMore">
      {
        loading ? <Spinner /> : <button onClick={loadMoreData} className='loadMore-btn'>Load More</button>
      }
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