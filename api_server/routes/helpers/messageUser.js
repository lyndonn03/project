module.exports = (type, message, status = false) => {
    return {
        success: status,
        type: type,
        message: message
    }
}