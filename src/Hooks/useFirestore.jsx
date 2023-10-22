import { arrayRemove, arrayUnion, getDoc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { docRef } from '../services/firebase/firebaseUtils.js';
import { addToFavorite, removeFromFavorite } from '../store/Rtk/slices/favoriteSlice.jsx'



const useFirestore = () => {

  const dispatch = useDispatch();

  const readData = async (showId) => {
    const docSnap = await getDoc(docRef);
    if (docSnap.data().favList.find(obj => obj.showId == showId)) {
      dispatch(addToFavorite(showId));
    }
  }
  const PostDataToApi = async (movieData) => {
    await updateDoc(docRef, {
      favList: arrayUnion(movieData)
    })

  }
  const DeleteDataFromApi = async (movieData) => {
    await updateDoc(docRef, {
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
      // dispatch(changeStatus(!status))
    })
  }


  return { readData, addAndRead, removeAndRead, PostDataToApi };
};

export default useFirestore;