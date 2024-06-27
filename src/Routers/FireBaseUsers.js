import express from 'express'
import Firebase from '../Controllers/ConnectionFireBase.js';

const FireBaseUsers = express.Router();
const db = new Firebase();

// Ruta de la Api para Iniciar sesión en la App
FireBaseUsers.get('/User', async (req, res) => {
    const data = req.query.data;
    const info = JSON.parse(data);
    const result = await db.GetInfoDataBase('Users', info.email);
    const askRequests = { Years: null, Sex: null, User: null, Name: null, Password: null, IsCorrect: null }
    if (result.isExists) {
        const values = result.data;
        if (info.password == values.Password) {
            askRequests.Years = values.Years;
            askRequests.Sex = values.Sex;
            askRequests.User = values.User;
            askRequests.Name = values.Name;
            askRequests.Password = values.Password;
            askRequests.IsCorrect = true;
        } else {
            askRequests.IsCorrect = false;
        }
    } else {
        askRequests.IsCorrect = false;
    }
    res.json(askRequests)
});

// Ruta de la Api para Crear una cuenta en la App
FireBaseUsers.post('/User', (req, res) => {
    res.json({ message: 'recibido' })
});

// Ruta de la Api para Modificar los Datos del usuario en la App
FireBaseUsers.put('/User', (req, res) => {

})

// Ruta de la Api para Eliminar una cuenta en la App
FireBaseUsers.delete('/User', (req, res) => {

})

export default FireBaseUsers;