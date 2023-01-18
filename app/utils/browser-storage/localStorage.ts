export const getStoreLocalStorage = (name: string) => {
    if(typeof localStorage !== 'undefined') {
        const localSt = localStorage.getItem(name)
        return localSt ? JSON.parse(localSt) : null
    }
    return null
}