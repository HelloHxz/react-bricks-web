export default (func) => {
    return {
        type:"dynamic",
        pagePromise:func
    }
}