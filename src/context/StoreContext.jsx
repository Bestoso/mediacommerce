import React, { createContext, useContext, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const storeContext = createContext();

export const useStoreContext = () => useContext(storeContext);

export const StoreContextProvider = ({ children }) => {

    const [loader, setLoader] = useState(true);
    const [category, setCategory] = useState([]);

    const getFireElements = async () => {
        const db = getFirestore();
        const queryCollection = collection(db, 'categories');
        getDocs(queryCollection)
            .then(resp => {
                setCategory(resp.docs.map(doc => ({ id: doc.id, ...doc.data()})))
                setLoader(false);
            })
        }

    return (
        <storeContext.Provider value={{
            getFireElements,
            category,
            setCategory,
            loader,
            setLoader
        }}>
            {children}
        </storeContext.Provider>
    )
}
