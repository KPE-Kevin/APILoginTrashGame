import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv'
import { getFirestore, collection, addDoc, getDoc, doc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

dotenv.config()

class ConnectionFireBase {
    constructor() {
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID
        }
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async InsertValueDatabase(coleccion, id, object) {
        try {
            const dato = await setDoc(doc(this.db, coleccion, id), object);
            console.log(dato)
            // alert("ID del objeto: " + dato.id);
        } catch (e) {
            // alert('Error: ' + e)
        }

    }

    async GetInfoDataBase(_doc, _id) {
        const info = { data: null, message: null, isExists: null };
        try {
            const result = await getDoc(doc(this.db, _doc, _id))
            if (result.exists()) {
                info.data = result.data();
                info.isExists = true;
                info.message = "successful"
            } else {
                info.message = "No exist";
                info.isExists = false;
            }
        } catch (e) {
            console.log('Error: ', e)
        }
        return info;
    }

    async UpdateCollDataBase(collection, obj, id) {

        try {
            let docModificar = doc(this.db, collection, id);
            await updateDoc(docModificar, obj);
        } catch (e) {
            alert('Error: ', e);
        }
    }

    async DeleteCollDataBase(collection, id) {
        try {
            let docBorrar = doc(this.db, collection, id);
            await deleteDoc(docBorrar);
        } catch (e) {
            alert('Error: ', e);
        }
    }
}

export default ConnectionFireBase;