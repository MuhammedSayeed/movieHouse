import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase/firebase.js';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../store/Rtk/slices/favoriteSlice.jsx'

function useFirestore() {
  const userId = localStorage.getItem("uid");
  const dispatch = useDispatch();

  const readData = async (showId) => {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.data().favList.find(obj => obj.showId == showId)) {
      dispatch(addToFavorite(showId))
    }
  }

  const postToApi = async (movieData) => {
    if (userId) {
      try {
        await updateDoc(doc(db, "users", userId), {
          favList: arrayUnion(movieData)
        }).then(() => {
          dispatch(addToFavorite(movieData.showId))
        })
      } catch (error) {
        console.log(error)
      }
    }
  }


  return {
    postToApi,
    readData
  }
}

export default useFirestore