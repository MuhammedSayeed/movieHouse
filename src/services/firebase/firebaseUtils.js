import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

const userId = localStorage.getItem("uid");

const createCollection = async (UserId) => {
    const docRef = doc(db, "users", UserId);
    try {
        if (userId) {
            await setDoc(docRef, {
                favList: []
            })
        }
    } catch(error) {
        console.log(error);
    }
}



export {
    createCollection,
}