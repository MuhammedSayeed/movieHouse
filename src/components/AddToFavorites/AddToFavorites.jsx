import React, { useEffect, useState } from 'react'
import './AddToFavorites.scss'
import useFirestore from '../../Hooks/useFirestore.jsx'
import Spinner from '../Spinner/Spinner.jsx';

function AddToFavorites({ showData }) {
  const { addAndRead, readData, removeAndRead } = useFirestore()
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(true);



  const handleAddToFavorites = async () => {
    await addAndRead(showData, showData.id)
    setAdded(true);
  }
  const handleRemoveFromFavorites = async () => {
    await removeAndRead(showData, showData.id);
    setAdded(false)
  }


  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      readData(showData.showId).then((res) => {
       setLoading(false);
        if (res) {
          setAdded(true);
        }
      })

    }

    return () => {
      isApiSubscribed = false;
    }

  }, [])

  return <>

    {
      loading ? <div>
        <Spinner size = {'20px'} />
      </div> :
        (
          added ?
            <button onClick={handleRemoveFromFavorites} className='removeFromFavorites card-btn-style'>Remove</button>
            :
            <button onClick={handleAddToFavorites} className='addToFavorites card-btn-style'>Add</button>
        )
    }

  </>

}

export default AddToFavorites