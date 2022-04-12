export const setLocalStorage = (localKey, localValue) => {
    const parsed = JSON.stringify(localValue);
    localStorage.setItem(localKey, parsed);
}

export const getLocalStorage = (localKey) => {
    return JSON.parse(localStorage.getItem(localKey))
}