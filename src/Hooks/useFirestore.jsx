import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import { addToFavorite, removeFromFavorite } from '../store/Rtk/slices/favoriteSlice.jsx'
import { db } from '../services/firebase/firebase.js';
import { changeStatus } from '../store/Rtk/slices/statusSlice.jsx';



const useFirestore = () => {

  const dispatch = useDispatch();
  const userId = localStorage.getItem("uid")
  const status = useSelector(state => state.status.status)



  const readData = async (showId) => {
    if (userId) {
      const docSnap = await getDoc(doc(db, "users", userId));
      if (docSnap.data().favList.find(obj => obj.showId == showId)) {
        dispatch(addToFavorite(showId));
        return true;
      }
      
    }


  }
  const PostDataToApi = async (movieData) => {
    await updateDoc(doc(db, "users", userId), {
      favList: arrayUnion(movieData)
    })

  }
  const DeleteDataFromApi = async (movieData) => {
    await updateDoc(doc(db, "users", userId), {
      favList: arrayRemove(movieData)
    })
  }
  const addAndRead = async (movieData, showId) => {
    await PostDataToApi(movieData).then(() => {
      dispatch(addToFavorite(showId))
    })
  }
  const removeAndRead = async (movieData, showId) => {
    await DeleteDataFromApi(movieData).then(() => {
      dispatch(removeFromFavorite(showId));
      dispatch(changeStatus(!status))
    })
  }


  return { readData, addAndRead, removeAndRead, PostDataToApi , DeleteDataFromApi };


  
};

export default useFirestore;