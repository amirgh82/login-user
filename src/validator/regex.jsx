const testEmail = (value) => {
    const emailPattent = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    return emailPattent.test(value)
}

const testUsername = (value) => {
    const usernameParent = /^[a-z0-9_-]{4,15}$/
    return usernameParent.test(value)
}

const testPhone = (value) => {
    const phoneParent = /(\+98|0)?9\d{9}/
    return phoneParent.test(value)
}

export default { testEmail, testUsername, testPhone }