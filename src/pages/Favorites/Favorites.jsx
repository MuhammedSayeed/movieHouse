import React, { useEffect, useState } from 'react'
import './Favorites.scss'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase.js';
import Card from '../../components/Card/Card.jsx';
import { useSelector } from 'react-redux';

function Favorites() {

    const [favlist, setFavlist] = useState([]);
    const status = useSelector(state => state.status.status)

    useEffect(() => {
        let isApiSubscribed = true;
        const userId = localStorage.getItem("uid")

        const readData = async () => {
            if (userId) {
                const docSnap = await getDoc(doc(db, "users", userId))
                if (docSnap.data().favList) {
                    setFavlist(docSnap.data().favList);
                }
                return docSnap;
            }
        }
        if (isApiSubscribed) {
            readData();
        }

        return () => {
            isApiSubscribed = false;
        }
    }, [status])

    return <>
        <div className="favorites-container">
            <div className="favorites-content">

                {
                    favlist.length < 1 ?
                        <p>No data to show</p>
                        :
                        <div className="favorites-layout">
                            {
                                favlist.map((favShow) => {
                                    return <Card key={favShow.showId} showData={favShow} />
                                })
                            }
                        </div>
                }
            </div>

        </div>

    </>
}

export default Favorites