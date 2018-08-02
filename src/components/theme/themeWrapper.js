export default (func) => {
    return {
        type:"theme",
        ThemePromise:func
    }
}