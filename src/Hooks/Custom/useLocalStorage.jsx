import React from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    const setLocalStorageValue = (newValue) => {
        try {
            setValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    };

    return [value, setLocalStorageValue];
}

export default useLocalStorage;