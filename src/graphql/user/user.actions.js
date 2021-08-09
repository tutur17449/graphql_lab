const fetch = require('node-fetch')

const getUserById = async (id) => {
    const response = await fetch(`http://localhost:4200/user/${id}`, {method: 'GET'})
    const data = await response.json()
    return data
}

module.exports = {
    getUserById
}