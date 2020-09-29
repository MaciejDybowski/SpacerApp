export const setData = (fetchedData) => {
    return {
        type : "setData",
        data: fetchedData,
    }
}