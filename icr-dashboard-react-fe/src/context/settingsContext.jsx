import React, { useState, useEffect, createContext, useContext } from 'react'

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
    const [icrOptions, setIcrOptions] = useState('all');
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleIcrOptions = (value) => {
        setIcrOptions(value);
    }

    return (
        <SettingsContext.Provider value={{ icrOptions, setIcrOptions, handleIcrOptions, isChecked, handleCheckbox }}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useIcrOptions = () => {
    const context = useContext(SettingsContext);
    return context;
}

