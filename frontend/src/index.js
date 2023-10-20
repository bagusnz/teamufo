import React from 'react';
import ReactDOM from 'react-dom/client';
import { createUser, readUserByEmail } from './services/crud/UserCRUD';
import UserModel from './models/UserModel';

// createUser(new UserModel(1,"newusername","email@test.com", new Date(), new Date()).toObject())

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <h1>Hallo, Welt!</h1>
);