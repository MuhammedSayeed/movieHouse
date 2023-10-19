import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

const userId = localStorage.getItem("uid");

// if(userId){
//     const docRef = doc(db, "users", userId);

// }

const createCollection = async (UserId) => {
    try {
        if (userId) {
            const usersRef = doc(db, "users", UserId)
            await setDoc(usersRef, {
                favList: []
            })
        }
    } catch (err) {
        console.log(err);
    }
}



export {
    createCollection,
    // docRef
}