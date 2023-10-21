import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

const userId = localStorage.getItem("uid");

const createCollection = async (UserId) => {
    try {
        if (userId) {
            await setDoc(doc(db, "users", UserId), {
                favList: []
            })
        }
    } catch {

    }
}



export {
    createCollection,
}