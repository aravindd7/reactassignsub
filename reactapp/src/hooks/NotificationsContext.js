import React, { createContext, useState } from 'react';

export const NotificationsContext = createContext({});

export default function NotificationsProvider(props) {
    const {
    children
    } = props;
    const [notCounter, setNotCounter] = useState(0);

    function addNotifications() {
        setNotCounter(notCounter => notCounter + 1);
        return null;
    }

    const notContext = {
        notCounter,
        addNotifications
    }

    return (
        <NotificationsContext.Provider
        value={notContext}
        >
            {children}
        </NotificationsContext.Provider>
    );
}