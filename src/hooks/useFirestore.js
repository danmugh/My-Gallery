import { useState, useEffect } from 'react';
import fire, { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {
        const userId = localStorage.getItem('userId');

        // let currentUser = fire.auth().currentUser;
        //
        // console.log('fire.auth().currentUser', currentUser);

        const cyrrus = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .where('userId', '==', userId)
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });

        return () => cyrrus();

        // this is a cleanup function that react will run when
        // a component using the hook unmounts
    }, [collection]);

    return { docs };
}

export default useFirestore;