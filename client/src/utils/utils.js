export const getLocal = (key) => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify([]))
        let data = JSON.parse(localStorage.getItem(key))
        return data
    }else {
        let data = JSON.parse(localStorage.getItem(key))
        return data
    }
}

export const setLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify([data]))
}