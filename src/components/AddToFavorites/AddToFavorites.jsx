import React, { useEffect, useState } from 'react'
import './AddToFavorites.scss'
import useFirestore from '../../Hooks/useFirestore.jsx'
import { useSelector } from 'react-redux'

function AddToFavorites({ showData }) {
  const { addAndRead, readData, removeAndRead } = useFirestore()
  const favorites = useSelector(state => state.favorites.favorites);
  const [subscribe, setSubscribe] = useState(true);


  useEffect(() => {

    if (subscribe) {
      readData(showData.showId)

    }

    return () => {
      setSubscribe(false);
    }

  }, [])

  return <>
    {
      favorites.includes(showData.showId) ?
        (
          <button onClick={() => { removeAndRead(showData, showData.showId) }} className='removeFromFavorites card-btn-style'>Remove</button>
        )
        :
        (
          <button onClick={() => { addAndRead(showData, showData.showId) }} className='addToFavorites card-btn-style'>Add</button>
        )
    }
  </>

}

export default AddToFavorites