import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

const userId = localStorage.getItem("uid");

// if(userId){
//     const docRef = doc(db, "users", userId);

// }

const createCollection = async (id) => {
    try {
        if (userId) {
            const usersRef = doc(db, "users", id)
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