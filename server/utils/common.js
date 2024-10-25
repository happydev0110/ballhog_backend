export const sendRes = (success = false, message = 'Server Error', result = {}) => {
    let resData = {
        success,
        message,
        result
    }

    return resData
}