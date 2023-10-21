// UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { readUserByEmail } from './crud/UserCRUD';

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                const user = await readUserByEmail(authUser.email)                
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
