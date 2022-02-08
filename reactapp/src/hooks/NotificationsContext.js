import React, { createContext } from 'react';

const NotificationsContext = createContext("");

export default function NotificationsProvider({children}) {

    return (
        <NotificationsContext.Provider>
            {children}
        </NotificationsContext.Provider>
    );
}