import React, { useEffect } from 'react'
import './AddToFavorites.scss'
import useFirestore from '../../Hooks/useFirestore.jsx'
import { useSelector } from 'react-redux'

function AddToFavorites({ showData }) {
  const { postToApi, readData } = useFirestore()
  const favorites = useSelector(state => state.favorites.favorites);


  useEffect(() => {
    readData(showData.showId)
  }, [])

  return <>
    {
      favorites.includes(showData.showId) ?
        (
          <button onClick={() => { postToApi(showData) }} className='removeFromFavorites card-btn-style'>Remove</button>
        )
        :
        (
          <button onClick={() => { postToApi(showData) }} className='addToFavorites card-btn-style'>Add</button>
        )
    }
  </>

}

export default AddToFavorites