import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

// const userId = localStorage.getItem("uid") ;
// const docRef = doc(db, "users", userId);
const createDataBase = async (UserId) => {
    try {
        if (UserId) {
            const usersRef = doc(db, "users", UserId)
            await setDoc(usersRef, {
                favList: []
            })
        }
    } catch {

    }
}



export {
    createDataBase,
    // docRef
}